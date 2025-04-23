import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10">
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
                href="https://wa.me/541112345678"
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
              +54 11 1234 5678
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
