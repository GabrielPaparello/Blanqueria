import { useState } from "react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 right-0 z-50">
      {/* Botón hamburger con fondo y líneas dinámicas */}
      <button
        className="relative group z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div
          className={`relative flex items-center justify-center rounded-full w-[50px] h-[50px] transition-all ring-0 ring-[var(--siete)] hover:ring-8 ring-opacity-30 duration-200 shadow-md
            ${isOpen ? "bg-[#fefae0]" : "bg-[#DDDFC4]"}
          `}
        >
          <div
            className={`relative flex flex-col justify-between w-[20px] h-[20px] transition-all duration-300 origin-center ${
              isOpen ? "rotate-[-45deg]" : "rotate-0"
            }`}
          >
            <div
              className={`h-[2px] w-1/2 rounded origin-right transition-all duration-300 delay-75 ${
                isOpen
                  ? "rotate-[-90deg] h-[1px] translate-y-[1px] bg-black"
                  : "rotate-0 h-[2px] translate-y-0 bg-black"
              }`}
            ></div>

            <div
              className={`rounded transition-all duration-300 h-[1px] ${
                isOpen ? "opacity-0 bg-black" : "opacity-100 bg-black"
              }`}
            ></div>

            <div
              className={`h-[2px] w-1/2 rounded self-end origin-left transition-all duration-300 delay-75 ${
                isOpen
                  ? "rotate-[-90deg] h-[1px] translate-y-[-1px] bg-black"
                  : "rotate-0 h-[2px] translate-y-0 bg-black"
              }`}
            ></div>

            {/* NUEVA LÍNEA PARA LA CRUZ */}
            <div
              className={`absolute top-1/2 left-0 h-[2px] w-1/2 rounded origin-center transition-all duration-300 delay-75 ${
                isOpen
                  ? "rotate-[-20deg] top-2 left-1 w-3 bg-black"
                  : "rotate-0 bg-transparent"
              }`}
              style={{ transformOrigin: "center" }}
            ></div>
          </div>
        </div>
      </button>

      {/* Menú Fullscreen */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[var(--sexto)] z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
          <div className="absolute top-0 items-center">
            <img className="h-40 w-auto" src="/public/logo.png" alt="Logo" />
          </div>
        <ul className="flex flex-col mt-20 items-center gap-20 text-xl text-black font-bold text-[30px]">
          <li className="text-center ">
            <a href="#inicio" className="" onClick={toggleMenu}>
              Inicio
            </a>
            <hr className="border-black min-w-[100vw] mt-5" />
          </li>
          <li className="text-center">
            <a href="#servicios" onClick={toggleMenu}>
              Servicios
            </a>
            <hr className="border-black min-w-[100vw] mt-5" />
          </li>
          <li className="text-center">
            <a href="#contacto" onClick={toggleMenu}>
              Contacto
            </a>
            <hr className="border-black min-w-[100vw] mt-5" />
          </li>
        </ul>
      </div>
    </div>
  );
};
