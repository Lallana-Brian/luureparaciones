import React from "react";
import phoneImg from "../../assets/images/swiper/phoneRepair.webP";
import { items } from "../../assets/data/dataStore";
import { CheckIcon } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-col md:flex-row h-auto  md:px-10 md:h-[500px]  w-full">
      {/* Lado izquierdo */}
      <div className="bg-blue-900 text-white flex-1 flex flex-col items-center justify-center">
        <div className="px-6 py-10 md:px-12 lg:px-10 max-w-xl">
          <h1 className="text-5xl font-bold mb-5">¿Por qué elegirnos?</h1>
          <h2 className="text-lg mb-6">
            Sabemos lo importante que son tus dispositivos. Por eso ofrecemos
            servicios de reparación rápidos, accesibles y profesionales
            respaldados por años de experiencia.
          </h2>
          <ul className="grid grid-cols md:grid-cols-2 gap-x-8 gap-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Lado derecho - Imagen */}
      <div className="flex-1 min-h-[250px] md:h-auto">
        <img
          src={phoneImg}
          alt="Technician working"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
