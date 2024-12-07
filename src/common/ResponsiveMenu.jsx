import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";

const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Menu Button */}
      <button
        className="focus:outline-none"
        onClick={toggleMenu}
      >
        <Menu fontSize="large" sx={{ color: "black" }} />
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 ${
          isOpen ? "right-0" : "-right-full"
        } md:${isOpen ? "w-1/3" : "w-0"} w-full h-full bg-white shadow-lg transition-all duration-300 z-50`}
      >
        {/* Close Button */}
        <div className="p-4 flex justify-end">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <Close fontSize="large" sx={{ color: "black" }} />
          </button>
        </div>

        {/* Menu Content */}
        <nav className="px-6 py-4 space-y-4">
          <a href="#" className="block text-gray-700 text-lg hover:text-blue-600">
            Home
          </a>
          <a href="#" className="block text-gray-700 text-lg hover:text-blue-600">
            About Us
          </a>
          <a href="#" className="block text-gray-700 text-lg hover:text-blue-600">
            Services
          </a>
          <a href="#" className="block text-gray-700 text-lg hover:text-blue-600">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
