"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p2 text-white rounded-md"
      >
        {/* botão para abrir o menu vertical*/}
        <Menu size={28} />
      </button>

      {/* Overlay para fechar clicando fora */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-neutral-900/50 z-40"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-74 bg-navbar shadow-lg z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* botão de fechar o menu */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white absolute m-4"
          >
            <X size={32} />
          </button>
        </div>

        <nav className="flex flex-col p-4 mt-10 space-y-4">
          <a href="#" className="hover:text-blue-600">
            Óculos de Grau
          </a>
          <a href="#" className="hover:text-blue-600">
            Óculos de Sol
          </a>
          <a href="#" className="hover:text-blue-600">
            Lentes de Contato
          </a>
          <a href="#" className="hover:text-blue-600">
            Acessórios
          </a>
        </nav>
      </div>
    </div>
  );
}
