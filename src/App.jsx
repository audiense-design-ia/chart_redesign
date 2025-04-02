import "./App.css";
import Tarjeta from "./assets/Tarjeta";
import SidebarNav from "./assets/NavBar";
import Header from "./assets/Header";
import TarjetaHorizontal from "./assets/TarjetaHorizontal";
import Grafico from "./assets/Grafico";
import XIcon from "./assets/icons/X.svg"
import TiktokIcon from "./assets/icons/tiktok.svg"
import ButterlfyIcon from "./assets/icons/butterfly.svg"
import InstagramIcon from "./assets/icons/instagram.svg"
import YoutubeIcon from "./assets/icons/youtube.svg"
import CrhomeIcon from "./assets/icons/chrome.svg"
import GraficoAngel from "./assets/GraficoAngel"
function App() {

/*   const followersData = [
    ["Blanca", "Carlos", 254],
    ["Blanca", "Angel", 124],
    ["Carlos", "Angel", 54],
    ["Blanca", "Blanca", 3647],
    ["Carlos", "Carlos", 725],
    ["Angel", "Angel", 1973],
    ["Angel", "Blanca", 76],
  ];
 */
  return (
    <>
      <Header />
      <SidebarNav />
      <div className="flex w-full h-full bg-[#F7F7F7] mt-16">
        <main className="flex flex-col py-16 px-20 w-full gap-10 min-h-screen pl-32">
      
          <div className="flex gap-4 mb-12 flex-wrap justify-center">
              <GraficoAngel></GraficoAngel>
          </div> 
        </main>
      </div>
    </>
  );
}

export default App;
