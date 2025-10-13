import { UserIcon, Squares2X2Icon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <main className="top-0 block">

      <header className="text-white p-4 flex flex-col items-center">
        {/* Navegação */}
        <nav className="flex space-x-2 font-bold fixed">
          <a
            className="bg-[#1d1d1d] px-4 py-2 rounded-lg hover:bg-amber-50 hover:text-black border-transparent"
            href="/"
          >
            HOME
          </a>

          <a
            className="bg-[#1d1d1d] px-4 py-2 rounded-lg hover:bg-amber-50 hover:text-black border-transparent"
            href="/about"
          >
            <UserIcon className="w-6 h-6 cursor-pointer" />
          </a>

          <a
            className="bg-[#1d1d1d] px-4 py-2 rounded-lg hover:bg-amber-50 hover:text-black border-transparent"
            href="/works"
          >
            <Squares2X2Icon className="w-6 h-6 cursor-pointer" />
          </a>

          <a
            className="bg-[#1d1d1d] px-4 py-2 rounded-lg hover:bg-amber-50 hover:text-black border-transparent"
            href="/Xet"
          >
            <ChatBubbleLeftIcon className="w-6 h-6 cursor-pointer" />
          </a>
        </nav>

        {/* Linha logo abaixo da nav */}
        <hr className="border-t border-white opacity-10 w-5/6 mx-auto my-6 mt-20" />
      </header>



    </main>
  );
}
