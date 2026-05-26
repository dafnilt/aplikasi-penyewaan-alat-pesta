import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.webp";
import menuIcon from "../assets/icon/menu.svg";
import searchIcon from "../assets/icon/search.svg";
import { allProduct } from "../dataProduk";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton, Badge } from "@mui/material";

function SearchEl() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      const results = allProduct.filter((product) =>
        product?.name?.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="relative w-max">
        <input
          type="text"
          name="search"
          id="search"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search"
          className="bg-white rounded-full pl-3 pr-10 py-2 border border-[#2F4C23] text-xs"
        />

        <img
          src={searchIcon}
          alt="Search Icon"
          className="w-4 absolute right-3 top-1/2 -translate-y-1/2 hover:cursor-pointer opacity-50 hover:opacity-100 transition-all"
        />

        {filteredProducts.length > 0 && (
          <div className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow-lg z-50">
            <ul>
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <a href={`/catalog/${product.id}`}>{product.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <IconButton onClick={() => setLoading(true)}>
        <Badge
          badgeContent={2}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#74B559",
              color: "white",
              fontSize: "0.6rem",
              minWidth: "16px",
              height: "16px",
            },
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: 22 }} />
        </Badge>
      </IconButton>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const catalogRegex = /\/catalog/;

  return (
    <div className="bg-white fixed top-0 inset-x-0 z-[9999]">
      <div className="h-[66px] max-w-screen-2xl mx-auto p-3 xl:border-b xl:border-black">
        <div className="h-full flex items-center justify-start">
          <img src={logo} className="h-10" alt="Logo Sewa Pesta Kita" />
          <div className="navbar-container hidden lg:flex gap-2 ml-6">
            <a
              className={`nav-link ${
                pathname == "/" && "nav-active bg-[#2F4C23]"
              }`}
              href="/"
            >
              Home
            </a>
            <a
              className={`nav-link ${
                pathname == "/about-us" && "nav-active bg-[#2F4C23]"
              }`}
              href="/about-us"
            >
              Tentang Kami
            </a>
            <a
              className={`nav-link ${
                catalogRegex.test(pathname) && "nav-active bg-[#2F4C23]"
              }`}
              href="/catalog"
            >
              Katalog Produk
            </a>
            <a
              className={`nav-link ${
                /\/portofolio/.test(pathname) && "nav-active bg-[#2F4C23]"
              }`}
              href="/portofolio"
            >
              Portofolio
            </a>
            <a
              className={`nav-link ${
                pathname == "/contact" && "nav-active bg-[#2F4C23]"
              }`}
              href="/contact"
            >
              Kontak
            </a>
          </div>
          <div className="flex items-center gap-3 ml-auto">
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
              className={`nav-link ${pathname == "/" && "bg-[#2F4C23] text-white"}`}
              href="/"
            >
              Home
            </a>
            <a
              className={`nav-link ${pathname == "/about-us" && "bg-[#2F4C23] text-white"}`}
              href="/about-us"
            >
              Tentang Kami
            </a>
            <a
              className={`nav-link ${
                catalogRegex.test(pathname) && "bg-[#2F4C23] text-white"
              }`}
              href="/catalog"
            >
              Katalog Produk
            </a>
            <a
              className={`nav-link ${
                pathname == "/portofolio" && "bg-[#2F4C23] text-white"
              }`}
              href="/portofolio"
            >
              Portofolio
            </a>
            <a
              className={`nav-link ${pathname == "/contact" && "bg-[#2F4C23] text-white"}`}
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
