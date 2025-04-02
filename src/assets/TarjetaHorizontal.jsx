import React from "react";
import { cn } from "../utils/cn";

const TarjetaHorizontal = ({
  iconos = [],
  titulo = "Engagement",
  descripcion = "Measure the volume of traffic from active authors on keywords, hashtags, URLs, and mentions.",
  textoBoton = "Go",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="w-[18rem]  rounded-[16px] flex flex-col p-4 shadow-[0_4px_12px_0px_#3981F71A] hover:shadow-[0_5px_16px_0px_#3981F733] transition-all duration-300 bg-white text-start text-sm justify-between cursor-pointer group"
    >
      {/* Iconos superiores */}
      <div className="flex space-x-2 text-gray-400">
        {iconos.map((icon, index) => (
          <img key={index} src={icon} alt="icon" className="h-5 w-5" />
        ))}
      </div>

      {/* Contenido */}
      <div className="mt-4">
        <h2 className="text-gray-800 font-semibold text-md">{titulo}</h2>
        <p className="text-gray-500 text-xs leading-5 mt-1 mb-6">{descripcion}</p>
      </div>
        
      {/* Botón integrado */}
      <div
        className={cn(
          "bg-[#E8F3FE] text-blue-600 rounded-md font-medium flex items-center justify-center gap-1",
          "h-[38px] rounded-lg px-4 py-2  transition-all duration-200 relative",
          "group-hover:bg-blue-600 group-hover:text-white group-hover:px-6 w-fit"
        )}
      >
        <span className="transition-all duration-200 group-hover:mr-1">
          {textoBoton}
        </span>
        <span 
          className="opacity-0 w-0 transition-all duration-200 group-hover:opacity-100 group-hover:w-auto"
        >
          →
        </span>
      </div>
    </div>
  );
};

export default TarjetaHorizontal;