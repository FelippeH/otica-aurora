"use client";

import { X } from "lucide-react";

type SideMenuProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function SideMenu({ isOpen, setIsOpen }: SideMenuProps) {
  const closeMenu = () => setIsOpen(false);

  // Menu lateral para navegação mobile
  return (
    <>
      {/* Overlay escuro no mobile. Única função. */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Sidebar lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-68 bg-navbar shadow-lg z-50
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:hidden`}
      >
        {/* Botão para fechar o sidebar */}
        <div className="flex justify-end p-5">
          <button onClick={closeMenu} className="text-black">
            <X size={32} />
          </button>
        </div>

        {/* Links de navegação do sidebar */}
        <nav className="flex flex-col p-4 space-y-4">
          <a href="#" className="hover:text-gray-400 text-black">
            Óculos de Grau
          </a>
          <a href="#" className="hover:text-gray-400 text-black">
            Óculos de Sol
          </a>
          <a href="#" className="hover:text-gray-400 text-black">
            Lentes de Contato
          </a>
          <a href="#" className="hover:text-gray-400 text-black">
            Acessórios
          </a>
        </nav>
      </div>
    </>
  );
}
