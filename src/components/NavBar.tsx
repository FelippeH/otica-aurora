"use client";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [termo, setTermo] = useState("");

  const handleSearch = () => {
    if (termo.trim() === "") return;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <>
      <header className="bg-navbar fixed w-full h-22 px-8 z-50 flex items-center">
        {/* Botão do menu lateral: fixo à esquerda no mobile */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="absolute left-4 md:hidden p-2 text-black rounded-md"
        >
          <Menu size={28} />
        </button>

        {/* Logo: central no mobile, esquerda no desktop */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Link className="md:relative left-16" href="/">
            <Image src="/logo.png" alt="Ótica Aurora" width={60} height={60} />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-16 absolute left-1/2 transform -translate-x-1/2">
          <input
            className="bg-white rounded-lg p-2 w-100"
            type="text"
            placeholder="O que você precisa hoje?"
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <nav className="flex gap-7 text-sm">
            <a href="#">Óculos de Grau</a>
            <a href="#">Óculos de Sol</a>
            <a href="#">Lentes de Contato</a>
            <a href="#">Acessórios</a>
          </nav>
        </div>
      </header>

      {/* SideMenu recebe as props */}
      <SideMenu isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
}
