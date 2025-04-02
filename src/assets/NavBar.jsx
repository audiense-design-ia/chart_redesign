import { useState } from "react";
import HomeIcon from "./icons/home.svg";
import AllReportsIcon from "./icons/allreports.svg";
import BreckdownIcon from "./icons/breakdowns.svg";
import EngagementIcon from "./icons/engagement.svg";
import PopularityIcon from "./icons/popularity.svg";
import LoyaltyIcon from "./icons/loyalty.svg";
import GrowthIcon from "./icons/growth.svg";
import TrendsIcon from "./icons/trends.svg";
import ListBuildingIcon from "./icons/listbuilding.svg";
import PersonasIcon from "./icons/personas.svg";
import SettingsIcon from "./icons/settings.svg";

function NavItem({ icon, label, isExpanded, isActive, onClick }) {
  return (
    <div
      className={`flex items-center my-1 p-2 rounded-lg cursor-pointer w-full text-slate-400 hover:text-slate-600 hover:bg-slate-100  
        ${isActive ? "bg-slate-100 text-slate-600 " : ""} 
        ${isExpanded ? "justify-start" : "justify-center"}`}
      onClick={onClick}
    >
      {icon}
      {isExpanded && <span className="ml-2 text-xs font-medium">{label}</span>}
    </div>
  );
}

export function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const navItems = [
    { id: "home", icon: <img src={HomeIcon} alt="Inicio" className="w-4 h-4" />, label: "Inicio" },
    { id: "allReports", icon: <img src={AllReportsIcon} alt="Todos los Reportes" className="w-4 h-4" />, label: "Todos los Reportes" },
    { id: "breakdown", icon: <img src={BreckdownIcon} alt="Desglose" className="w-4 h-4" />, label: "Desglose" },
    { id: "engagement", icon: <img src={EngagementIcon} alt="Engagement" className="w-4 h-4" />, label: "Engagement" },
    { id: "popularity", icon: <img src={PopularityIcon} alt="Popularidad" className="w-4 h-4" />, label: "Popularidad" },
    { id: "loyalty", icon: <img src={LoyaltyIcon} alt="Lealtad" className="w-4 h-4" />, label: "Lealtad" },
    { id: "growth", icon: <img src={GrowthIcon} alt="Crecimiento" className="w-4 h-4" />, label: "Crecimiento" },
    { id: "trends", icon: <img src={TrendsIcon} alt="Tendencias" className="w-4 h-4" />, label: "Tendencias" },
    { id: "listBuilding", icon: <img src={ListBuildingIcon} alt="List Building" className="w-4 h-4" />, label: "List Building" },
    { id: "personas", icon: <img src={PersonasIcon} alt="Personas" className="w-4 h-4" />, label: "Personas" },
  ];
  
  return (
    <div className="fixed top-20 z-10">
      <div
        className={` flex flex-col bg-white rounded-xl shadow-[0_5px_16px_0px_#3981F733] transition-all duration-300 py-3 px-2 m-4 h-[86vh] 
          ${isExpanded ? "w-48 items-start" : "w-14 items-center"} `}
      >
        {/* Contenedor de ítems apilados */}
        <div className="flex flex-col flex-1 w-full gap-1 justify-start">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isExpanded={isExpanded}
              isActive={activeItem === item.id}
              onClick={() => setActiveItem(item.id)}
            />
          ))}
        </div>

        {/* Ítem de Configuración separado */}
        <div className="mb-2 w-full">
          <NavItem
            icon={<i className="material-icons text-[16px]">settings</i>}
            label="Configuración"
            isExpanded={isExpanded}
            isActive={activeItem === "settings"}
            onClick={() => setActiveItem("settings")}
          />
        </div>

        {/* Botón de expansión */}
        <div
          className="absolute shadow-[0_5px_16px_0px_#3981F733] -right-6 top-6 h-6 w-6 flex items-center justify-center rounded-full bg-white cursor-pointer text-slate-400 hover:text-slate-600"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <i className="material-icons text-xs">chevron_left</i>
          ) : (
            <i className="material-icons text-xs">chevron_right</i>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
