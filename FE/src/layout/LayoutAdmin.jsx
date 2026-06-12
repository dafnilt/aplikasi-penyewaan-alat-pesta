import { useState } from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import HeaderAdmin from "../components/HeaderAdmin";

function LayoutAdmin({ children, className = "", isModalOpen = false }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`flex min-h-screen ${className}`}>
      <NavbarAdmin
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        disabled={isModalOpen}
      />

      <div className="flex-1 bg-[#f5f5f5]">
        <HeaderAdmin
          isSidebarOpen={isSidebarOpen}
        />

        <div className="p-4 md:p-6 lg:p-8">{children}</div>
      </div>
    </div>
  );
}

export default LayoutAdmin;