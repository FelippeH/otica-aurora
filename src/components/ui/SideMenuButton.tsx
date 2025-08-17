"use client";
import { Menu, X } from "lucide-react";

type Props = {
  isOpen: boolean;
  toggleSideBar: () => void;
};

export default function SideMenuButton({ isOpen, toggleSideBar }: Props) {
  return (
    // Botão para abrir o menu lateral
    <button
      onClick={toggleSideBar}
      className="p-5 text-black rounded-md md:hidden"
    >
      {isOpen ? <X size={32} /> : <Menu size={32} />}
    </button>
  );
}
