import { useState } from "react";
import Btn from "../btn/Btn";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 px-6 py-4 bg-body text-title z-50 shadow-md">
      {/* Fondo con degradado (opcional) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent pointer-events-none z-0" />

      {/* Contenido principal del nav */}
      <div className="relative z-10 flex justify-between items-center md:hidden">
        {/* Botón menú hamburguesa */}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo centrado */}
        <div className="text-center text-xl font-semibold">LuuRepairs</div>

        {/* Botón WhatsApp */}
        <Btn
          className="px-2 font-medium flex items-center gap-2"
          bgColor="bg-white"
          hoverUnderline={true}
          onClick={() => window.open("https://wa.me/5493777674366", "_blank")}
          text={
            <>
              <FaWhatsapp className="w-6 h-6 text-green-500" />
              3777674366
            </>
          }
        />
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 text-white px-6 py-4 transition-all duration-300 ease-in-out ${
          isOpen ? "flex flex-col" : "hidden"
        }`}
      >
        <a href="#" className="py-2 hover:text-yellow-400">
          Inicio
        </a>
        <a href="#" className="py-2 hover:text-yellow-400">
          Acerca
        </a>
        <a href="#" className="py-2 hover:text-yellow-400">
          Contacto
        </a>
      </div>

      {/* Navbar de escritorio */}
      <div className="hidden md:flex justify-between items-center z-10">
        {/* Logo */}
        <div className="text-xl font-semibold">LuuRepairs</div>

        {/* Enlaces */}
        <div className="flex space-x-10">
          <a href="#" className="hover:text-yellow-500">
            Inicio
          </a>
          <a href="#" className="hover:text-yellow-500">
            Servicio
          </a>
          <a href="#" className="hover:text-yellow-500">
            Contacto
          </a>
        </div>

        {/* Botón WhatsApp */}
        <Btn
          className="px-4 font-medium flex items-center gap-2"
          onClick={() => window.open("https://wa.me/5493777674366", "_blank")}
          hoverUnderline={true}
          bgColor="bg-white"
          text={
            <>
              <FaWhatsapp className="w-6 h-6 text-green-500" />
              3777674366
            </>
          }
        />
      </div>
    </nav>
  );
}
