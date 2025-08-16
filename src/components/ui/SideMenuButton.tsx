"use client";
import { Menu } from "lucide-react";

type Props = {
  openSidebar: () => void;
};

export default function SideMenuButton({ openSidebar }: Props) {
  return (
    // Botão para abrir o menu lateral
    <button
      onClick={openSidebar}
      className="p-2 text-black rounded-md md:hidden"
    >
      <Menu size={32} />
    </button>
  );
}
