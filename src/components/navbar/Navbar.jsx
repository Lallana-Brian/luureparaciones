import { useState } from "react";
import Btn from "../btn/Btn";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 px-6 py-4 bg-body text-title z-50 shadow-md">
      {/* Fondo con degradado */}
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
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false); // Opcional: cerrar menú luego de click
          }}
          className="py-2 hover:text-button"
        >
          Inicio
        </a>

        <a
          href="#service"
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById("service");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            }
          }}
          className="py-2 hover:text-button"
        >
          Servicios
        </a>

        <a
          href="#contacto"
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById("contacto");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            }
          }}
          className="py-2 hover:text-button"
        >
          Contacto
        </a>
      </div>

      {/* Navbar de escritorio */}
      <div className="hidden md:flex justify-between items-center z-10 w-full">
        {/* Logo */}
        <div className="text-xl font-semibold">LuuRepairs</div>

        {/* Enlaces */}
        <ul className="flex gap-10">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-button"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#service"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("service");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-button"
            >
              Servicio
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("contacto");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-button"
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Botón WhatsApp */}
        <Btn
          className="px-4 font-medium flex items-center gap-2"
          hoverBgColor="hover:bg-buttonHover"
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
