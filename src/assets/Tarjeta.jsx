import React from "react";
import { cn } from "../utils/cn";

const Tarjeta = ({
  imagen = "https://loodibee.com/wp-content/uploads/Twitter-X-Logo.png",
  texto = "Texto por defecto de la tarjeta.",
  textoBoton = "Click aquí",
  onClick,
  labelNew,
}) => {
  return (
    <div
      onClick={onClick}
      className="relative w-[14rem] h-[18rem] rounded-[16px] flex flex-col p-[36px_12px] shadow-[0_4px_12px_0px_#3981F71A] hover:shadow-[0_5px_16px_0px_#3981F733] transition-all duration-300 bg-white cursor-pointer group"
    >
      {/* Label New en la esquina superior derecha */}
      {labelNew && (
        <div className="absolute top-4 right-4 bg-violet-100 text-purple-500 text-xs font-semibold px-2 py-1 rounded-md">
          {labelNew}
        </div>
      )}

      <div className="flex flex-col items-center justify-between px-[16px] h-full">
        {/* Imagen del logo */}
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <img src={imagen} alt="Logo" className="h-10 w-auto" />
          <p className="text-center text-gray-700 font-poppins font-normal text-xs leading-[18px]">
            {texto}
          </p>
        </div>
        {/* Botón integrado */}
        <div
          className={cn(
            "bg-[#E8F3FE] text-blue-600 rounded-md font-medium flex items-center justify-center gap-1",
            "h-[38px] rounded-lg px-4 py-2 transition-all duration-200 relative min-w-[6rem]",
            "group-hover:bg-blue-600 group-hover:text-white group-hover:px-6"
          )}
        >
          <span className="transition-all duration-50 group-hover:mr-1">
            {textoBoton}
          </span>
          <span className="opacity-0 w-0 transition-all duration-200 group-hover:opacity-100 group-hover:w-auto">
            →
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
