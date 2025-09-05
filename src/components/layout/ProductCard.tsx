"use client";

import { Product } from "@/types/ProductType";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 bg-white">
      {/* Container da imagem fluido */}
      <div className="relative w-full">
        <Image
          src={product.image[0]}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-auto object-contain rounded-lg transition-all duration-300"
        />
      </div>

      <div className="flex flex-col text-center">
        <h2 className="text-xl font-bold mt-2">{product.name}</h2>
        <p className="text-gray-600 text-xl">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}
