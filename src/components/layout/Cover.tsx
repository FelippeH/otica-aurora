"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Array de slides do carrossel
const slides = [
  { image: "/cover1.jpg" },
  { image: "/cover2.jpg" },
  { image: "/cover3.jpg" },
  { image: "/cover4.jpg" },
];

export default function Cover() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 6000;

  // Alterna automaticamente os slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={`Slide ${index}`}
            fill
            className="object-cover w-full h-full mt-[40px]"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
