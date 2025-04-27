import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import phoneRepair from "../../assets/images/swiper/phoneRepair.webp";

const Footer = () => {
  return (
    <footer className="bg-oklchBlue text-white py-10">
      <div className="relative">
        {/* Card con imagen de fondo */}
        <div
          className="mx-4 md:mx-16 h-60 bg-cover bg-center rounded-lg shadow-lg z-10"
          style={{
            backgroundImage: `url(${phoneRepair})`, // Usar la variable importada
          }}
        >
          {/* Filtro oscuro para que el texto sea legible */}
          <div className="bg-black bg-opacity-40 h-full w-full flex items-center justify-center">
            <div className="text-white text-center px-6">
              <h4 className="text-4xl md:text-5xl font-semibold">
                Consultanos al{" "}
                <a
                  href="https://wa.me/5493777674366" // Número de WhatsApp
                  className="underline md:hover:underline transition-all"
                >
                  +54 9 3777-674366
                </a>
              </h4>
              <p className="text-lg mt-4">
                Si tenes preguntas o estás listo/a para reservar una reparación,
                estamos aquí para ayudarte.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 z-0">
        {/* Columna 1: Logo + Horarios */}
        <div>
          {/* Logo */}
          <h2 className="text-2xl font-bold mb-4">LuuReparaciones</h2>

          {/* Horarios */}
          <div className="text-sm text-gray-300 space-y-1">
            <p>Lunes a Viernes: 09:00 - 18:00</p>
            <p>Sábados: 10:00 - 14:00</p>
            <p>Domingos: Cerrado</p>
          </div>
        </div>

        {/* Columna 2: Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contacto y redes</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaWhatsapp size={16} />
              <a
                href="https://wa.me/5493777674366"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={16} />
              <a
                href="https://instagram.com/miempresa"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Facebook size={16} />
              <a
                href="https://facebook.com/miempresa"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:contacto@miempresa.com">Email</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              +54 9 3777 67-4366
            </li>
          </ul>
        </div>
      </div>

      {/* Pie final */}
      <div className="text-center text-xs text-gray-400 mt-10">
        © {new Date().getFullYear()} LuuReparaciones. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
