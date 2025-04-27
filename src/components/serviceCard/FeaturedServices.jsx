import React from "react";
import { featuredImages } from "../../assets/data/dataStore";
import Btn from "../btn/Btn";
import { Instagram } from "lucide-react";
const FeaturedServices = () => {
  return (
    <section id="service" className="py-16 px-6 bg-body">
      {/* Contenedor del título y botón */}
      <div className="flex items-center justify-between flex-wrap mb-10 mt-10 px-4  ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-title md:ml-16 text-left -mt-14 -ml-5 md:mt-0">
          Servicios que <br /> ofrecemos
        </h1>

        {/* Botón a la derecha */}
        <Btn
          text={
            <>
              <Instagram className="w-5 h-5" />
              Ir al perfil de Instagram
            </>
          }
          className="mt-9 -ml-1 sm:mt-0 px-4 font-medium flex items-center gap-2 mr-0 sm:mr-20"
          textColor="text-body"
          borderColor="border-none"
        />
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-9 mt-16">
        {featuredImages.map((item, index) => (
          <div
            key={index}
            className={`relative w-96 h-120 ${item.bgColor} rounded-xl overflow-hidden shadow-md`}
          >
            <div className="relative h-80 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover clip-arrow"
              />
            </div>
            <div className="p-5 mt-10">
              <h2 className={`text-xl font-semibold ${item.textColor}`}>
                {item.title}
              </h2>
              <h3 className={`mt-2 ${item.textColor}`}>{item.subtitle}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedServices;
