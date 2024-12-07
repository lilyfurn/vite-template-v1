import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex items-center relative z-50">
        {/* Company Name */}
        <div className="text-xl text-gray-800 font-bold grow">LAIBEL LABS</div>

        {/* Menu Button */}
        <button className="focus:outline-none" onClick={toggleMenu}>
          <Menu fontSize="large" sx={{ color: "black" }} />
        </button>
      </header>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div
          className={`absolute top-0 right-0 h-full bg-white z-40 transition-all duration-300 ${
            isMenuOpen ? "w-full md:w-1/3" : "w-0"
          }`}
          style={{ paddingTop: "4rem" }} // Leaves space for the header
        >
          {/* Close Button */}
          <div className="p-4 flex justify-end">
            <button className="focus:outline-none" onClick={toggleMenu}>
              <Close fontSize="large" sx={{ color: "black" }} />
            </button>
          </div>

          {/* Menu Content */}
          <nav className="px-6 py-4 space-y-4">
            <a
              href="#"
              className="block text-gray-700 text-lg hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-700 text-lg hover:text-blue-600"
            >
              About Us
            </a>
            <a
              href="#"
              className="block text-gray-700 text-lg hover:text-blue-600"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-gray-700 text-lg hover:text-blue-600"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
