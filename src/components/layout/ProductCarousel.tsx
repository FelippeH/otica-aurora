"use client";

import { Product } from "@/types/products";
import { useEffect, useState } from "react";
import ProductCard from "@/components/layout/ProductCard";

export default function ProductCarousel({ products }: { products: Product[] }) {
  const [isMobile, setIsMobile] = useState(false);

  // checa se o dispositivo é móvel
  useEffect(() => {
    const updateItems = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateItems();
    window.addEventListener("resize", updateItems);

    return () => {
      window.removeEventListener("resize", updateItems);
    };
  }, []);

  // Renderiza os produtos em um layout de grade
  if (!isMobile) {
    return (
      <div className="grid grid-cols-4 gap-6 mx-50">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-4 overflow-x-auto px-4 snap-x snap-mandatory">
      {products.map((product) => (
        <div key={product.id} className="min-w-[90%] snap-start flex-shrink-0">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
