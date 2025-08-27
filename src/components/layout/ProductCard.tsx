"use client";

import { Product } from "@/types/products";
import { useState } from "react";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="border rounded-xl p-4 shadow-md hover:shadow-lg transition"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden w-full h-50 md:h-70">
        <Image
          src={hover ? product.images[1] : product.images[0]}
          alt={product.title}
          fill
          className="object-cover w-full h-full rounded-lg transition-all duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h2 className="text-xl font-bold mt-2">{product.title}</h2>
      <p className="text-gray-600 text-xl">R${product.price}</p>
    </div>
  );
}
