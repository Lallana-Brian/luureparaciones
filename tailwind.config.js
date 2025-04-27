/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      sans: [
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ],
    },
    extend: {
      fontFamily: {
        rale: ["Raleway"],
        playfair: ["Playfair Display", "serif"],
        numeros: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        body: "hsl(250, 60%, 98%)",
        // CARDS
        blue: "#e0f2fe",
        oklchBlue: "oklch(12.9% 0.042 264.695)",
        beige: "#FFF085",
        emerald: "#a7f3d0",
        blancoRoto: "oklch(97.5% 0.01 0)",
        redClaro: "#450a0a",

        container: "#ddd",
        title: "hsl(250, 8%, 15%)",
        subtitle: "hsl(250, 5%, 24%)",
        mycolor: "#212121",
        header: "rgba(255, 255, 255, 0.8)",
        text: "hsl(250, 8%, 35%)",
        containerRgb: "rgba(255, 255, 255)",
        shadow: "hsla(0, 0%, 15%, 0.1)",

        button: "#2563eb",
        buttonHover: "#172554",
        dark: {
          header: "rgba(32, 32, 32, 0.9)",
          title: "hsl(0, 0%, 90%)",
          nav: "hsl(0, 0%, 80%)",
          text: "hsl(0, 0%, 70%)",
          body: "hsl(0, 0%, 10%)",
          container: "hsl(0, 0%, 20%)",
          scrollbar: "hsl(0, 0%, 30%)",
          scrollThumb: "hsl(0, 0%, 25%)",
        },
      },
      textShadow: {
        lg: "4px 4px 8px rgba(0, 0, 0, 0.4)",
        xl: "6px 6px 12px rgba(0, 0, 0, 0.5)",
      },
      height: {
        120: "30rem",
        140: "35rem",
        150: "37.5rem",
      },
      width: {
        ancho: "28rem",
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
