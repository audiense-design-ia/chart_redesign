import Logo from "./icons/logo.svg";
import NotificationsIcon from "./icons/notifications.svg";
import MarkersIcon from "./icons/markers.svg";
import InfoIcon from "./icons/info.svg";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between h-16 px-4 ">
      {/* Lado izquierdo: Logo y navegación */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-md ">
            <img className="rounded-md" src={Logo} alt="logo" />
          </div>
          <span className="ml-2 text-gray-600 font-medium">Audiense</span>
        </div>

        <div className="flex items-center text-gray-500 ml-2">
          <i className="material-icons text-sm">chevron_right</i>
          <span className="ml-1 text-blue-500">Reports</span>
        </div>
      </div>

      {/* Lado derecho: Iconos de acción */}
      <div className="flex items-center space-x-4">
        <button className="p-1 rounded-full hover:bg-gray-100 bg-transparent flex items-center justify-center">
          <img
            src={NotificationsIcon}
            className="material-icons text-gray-600"
          ></img>
        </button>

        <button className="p-1 rounded-full hover:bg-gray-100 bg-transparent  flex items-center justify-center">
          <img
            src={MarkersIcon}
            className="material-icons text-gray-600"
          ></img>
        </button>

        <button className="p-1 rounded-full hover:bg-gray-100 bg-transparent flex items-center justify-center">
          <img
            src={InfoIcon}
            className="material-icons text-gray-600"
          ></img>
        </button>

        <div className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center text-white font-medium">
          T
        </div>
      </div>
    </header>
  );
}

export default Header;
