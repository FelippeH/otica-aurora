"use client";

import { useState } from "react";
import SideMenu from "../menu/SideMenu";
import Image from "next/image";
import Link from "next/link";
import SideMenuButton from "../ui/SideMenuButton";
import { Search } from "lucide-react";

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
      <header className="bg-navbar fixed w-full h-32 px-8 z-50 grid grid-cols-3 items-center md:h-22">
        {/* Botão do menu lateral: à esquerda */}
        <div className="relative -top-7 -left-7 md:hidden">
          <SideMenuButton
            isOpen={isSidebarOpen}
            toggleSideBar={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>

        {/* Logotipo e seu posicionamento no menu de navegação */}
        <div className="flex relative -top-7 justify-center md:justify-start md:top-0 md:left-16">
          <Link className="" href="/">
            <Image src="/logo.png" alt="Ótica Aurora" width={60} height={60} />
          </Link>
        </div>

        {/* Campo de busca */}
        <div className="absolute left-1/2 -translate-x-1/2 top-19 md:flex md:justify-start md:items-center md:gap-16 md:top-auto">
          <div className="relative w-80 md:w-106">
            <input
              className="bg-white rounded-[0.6rem] py-2 px-5 w-80 md:w-106"
              type="text"
              placeholder="O que você precisa hoje?"
              value={termo}
              onChange={(e) => setTermo(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Search
              size={20}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
          {/* Área de atalhos de navegação */}
          <nav className="hidden text-black md:whitespace-nowrap md:flex gap-7 text-m">
            <a href="oculos-grau" className="hover:text-gray-400">
              Óculos de Grau
            </a>
            <a href="oculos-sol" className="hover:text-gray-400">
              Óculos de Sol
            </a>
            <a href="lentes-contato" className="hover:text-gray-400">
              Lentes de Contato
            </a>
            <a href="acessorios" className="hover:text-gray-400">
              Acessórios
            </a>
          </nav>
        </div>
      </header>

      {/* SideMenu recebe as props */}
      <SideMenu isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
}
