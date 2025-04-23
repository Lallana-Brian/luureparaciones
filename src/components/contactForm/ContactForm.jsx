import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full max-w-2xl mx-auto mt-20 px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Contáctanos
      </h2>
      <form className="space-y-6">
        {/* Nombre */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tu nombre"
            required
          />
        </div>

        {/* Teléfono */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tu teléfono"
            required
          />
        </div>

        {/* Correo */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tu correo"
            required
          />
        </div>

        {/* Mensaje */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>
        </div>

        {/* Botón */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
