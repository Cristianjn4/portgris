"use client";

import { usePathname } from "next/navigation";
import { UserIcon, Squares2X2Icon, ChatBubbleLeftIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import ScrollBackground from '../components/ScrollBackground';

export default function Header() {
  const pathname = usePathname(); // pega a rota atual

  const navItems = [
    { id: "home", label: "HOME", href: "/", icon: <HomeIcon className="w-6 h-6 cursor-pointer" /> },
    { id: "about", label: "SOBRE", href: "/About", icon: <UserIcon className="w-6 h-6 cursor-pointer" /> },
    { id: "works", label: "TRABALHOS", href: "/Works", icon: <Squares2X2Icon className="w-6 h-6 cursor-pointer" /> },
    { id: "chat", label: "CONTATO", href: "/Xet", icon: <ChatBubbleLeftIcon className="w-6 h-6 cursor-pointer" /> },
  ];

  return (
    <header className="text-white p-4 flex flex-col items-center">
      {/* Navegação */}
      <nav className="flex space-x-2 font-bold fixed top-4 z-50">
        {navItems.map((item) => {
          const isActive = pathname.toLowerCase() === item.href.toLowerCase();
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`bg-[#140332] px-4 py-2 rounded-lg flex items-center justify-center transition-all
                ${isActive ? "text-white bg-[#1a1a1a]" : "text-gray-400 hover:text-black hover:bg-amber-50"}`}
            >
              {isActive ? item.label : item.icon}
            </Link>
          );
        })}
      </nav>
      <ScrollBackground />

      {/* Linha logo abaixo da nav */}
      <hr className="border-t border-white opacity-10 w-5/6 mx-auto my-6 mt-20" />
    </header>
  );
}
