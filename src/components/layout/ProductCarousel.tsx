"use client";

import { Product } from "@/types/ProductType";
import { useEffect, useState } from "react";
import ProductCard from "@/components/layout/ProductCard";

interface ProductCarouselProps {
  products: Product[];
  category?: string;
}

export default function ProductCarousel({
  products,
  category,
}: ProductCarouselProps) {
  const [isMobile, setIsMobile] = useState(false);

  // checa se o dispositivo é móvel ou desktop
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

  // Filtra os produtos pela categoria, se fornecida
  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  // Renderiza os produtos em um layout de grade
  if (!isMobile) {
    return (
      <div className="grid md:grid-cols-4 gap-6 mx-50">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-6 overflow-x-auto px-3 snap-x snap-mandatory">
      {filteredProducts.map((product) => (
        <div key={product.id} className="w-[78%] snap-start flex-shrink-0">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
