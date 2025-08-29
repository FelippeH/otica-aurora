"use client";

import { Product } from "@/types/ProductType";
import { useState } from "react";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="bg-white border-[1px] border-[#ededed] rounded-[10px] p-4 hover:border-gray-400 transition w-full max-w-xs mx-auto cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Container da imagem fluido */}
      <div className="relative w-full">
        <Image
          src={hover ? product.images[1] : product.images[0]}
          alt={product.title}
          width={500}
          height={500}
          className="w-full h-auto object-contain rounded-lg transition-all duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col text-center">
        <h2 className="text-xl font-bold mt-2">{product.title}</h2>
        <p className="text-gray-600 text-xl">R${product.price}</p>
      </div>
    </div>
  );
}
