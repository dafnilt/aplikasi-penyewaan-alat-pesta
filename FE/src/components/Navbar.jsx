import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import menuIcon from "../assets/icon/menu.svg";
import searchIcon from "../assets/icon/search.svg";

function SearchEl() {
  return (
    <div className="relative w-max ">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        className="bg-white rounded-full px-5 py-2 mx-3 my-1 border text-xs"
      />
      <img
        src={searchIcon}
        alt="Search Icon"
        className="w-4 absolute right-8 top-1/2 -translate-y-1/2 hover:cursor-pointer opacity-50 hover:opacity-100 transition-all"
      />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="bg-white fixed top-0 inset-x-0 z-[9999]">
      <div className="h-[66px] max-w-screen-xl mx-auto p-3 xl:border-b xl:border-black">
        <div className="flex items-center justify-between">
          <img src={logo} className="h-8" alt="Logo Sewa Pesta Kita" />
          <div className="navbar-container hidden lg:flex gap-2">
            <a
              className={`nav-link ${pathname == "/" && "nav-active"}`}
              href="/"
            >
              Home
            </a>
            <a
              className={`nav-link ${pathname == "/about-us" && "nav-active"}`}
              href="/about-us"
            >
              Tentang Kami
            </a>
            <a
              className={`nav-link ${pathname == "/catalog" && "nav-active"}`}
              href="/catalog"
            >
              Katalog Produk
            </a>
            <a
              className={`nav-link ${pathname == "/portofolio" && "nav-active"}`}
              href="/portofolio"
            >
              Portofolio
            </a>
            <a
              className={`nav-link ${pathname == "/contact" && "nav-active"}`}
              href="/contact"
            >
              Kontak
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <SearchEl />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 aspect-square flex lg:hidden items-center "
            >
              <img src={menuIcon} alt="Menu Icon" />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="absolute top-full inset-x-0 bg-white grid grid-cols-1 pb-8 border">
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
            <div className="sm:hidden">
              <SearchEl />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
