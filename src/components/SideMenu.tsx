"use client";

import { X } from "lucide-react";

type SideMenuProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function SideMenu({ isOpen, setIsOpen }: SideMenuProps) {
  return (
    <>
      {/* Overlay escuro no mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-68 bg-navbar shadow-lg z-50
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:hidden`} // <- importante, esconde no desktop
      >
        {/* Botão fechar */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-black">
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          <a href="#" className="hover:text-blue-400 text-black">
            Óculos de Grau
          </a>
          <a href="#" className="hover:text-blue-400 text-black">
            Óculos de Sol
          </a>
          <a href="#" className="hover:text-blue-400 text-black">
            Lentes de Contato
          </a>
          <a href="#" className="hover:text-blue-400 text-black">
            Acessórios
          </a>
        </nav>
      </div>
    </>
  );
}
