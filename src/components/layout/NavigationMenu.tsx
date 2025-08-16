"use client";

import { useState } from "react";
import SideMenu from "../menu/SideMenu";
import Image from "next/image";
import Link from "next/link";
import SideMenuButton from "../ui/SideMenuButton";

// Menu principal de navegação
export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar a visibilidade do menu lateral
  const [termo, setTermo] = useState(""); // Estado para armazenar o termo de busca

  // Função para lidar com a busca
  const handleSearch = () => {
    if (termo.trim() === "") return;
  };

  // Função para lidar com a tecla "Enter"
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <>
      <header className="bg-navbar fixed w-full md:h-22 h-32 px-8 z-50 flex items-center justify-between">
        {/* Botão do menu lateral: fixo à esquerda no mobile */}
        <div className="absolute left-4 top-3">
          <SideMenuButton openSidebar={() => setIsSidebarOpen(true)} />
        </div>

        {/* Logotipo e seu posicionamento no menu de navegação */}
        <div className="flex-1 flex justify-center -top-7 relative md:justify-start md:top-0">
          <Link className="md:relative md:left-16" href="/">
            <Image src="/logo.png" alt="Ótica Aurora" width={60} height={60} />
          </Link>
        </div>

        {/* Campo de busca */}
        <div className="absolute left-1/2 -translate-x-1/2 top-19 md:none md:flex md:justify-start md:items-center md:gap-16 md:top-auto">
          <input
            className="bg-white rounded-xl p-2 w-76 md:w-106"
            type="text"
            placeholder="O que você precisa hoje?"
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          {/* Área de atalhos de navegação */}
          <nav className="hidden md:whitespace-nowrap md:flex gap-7 text-m">
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
