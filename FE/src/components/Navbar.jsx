import logo from "../assets/logo.png";
import menuIcon from "../assets/icon/menu.svg";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="bg-white fixed top-0 inset-x-0 z-[9999]">
      <div className="inter p-3">
        <div className="flex justify-between">
          <img src={logo} className="h-8" alt="Logo Sewa Pesta Kita" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 aspect-square flex items-center"
          >
            <img src={menuIcon} alt="Menu Icon" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full inset-x-0 bg-white grid grid-cols-1">
          <a
            className={`nav-link ${pathname == "/" && "bg-black/10"}`}
            href="/"
          >
            Home
          </a>
          <a
            className={`nav-link ${pathname == "/about-us" && "bg-black/10"}`}
            href="/about-us"
          >
            Tentang Kami
          </a>
          <a
            className={`nav-link ${pathname == "/catalog" && "bg-black/10"}`}
            href="/catalog"
          >
            Katalog Produk
          </a>
          <a
            className={`nav-link ${pathname == "/portofolio" && "bg-black/10"}`}
            href="/portofolio"
          >
            Portofolio
          </a>
          <a
            className={`nav-link ${pathname == "/contact" && "bg-black/10"}`}
            href="/contact"
          >
            Kontak
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
