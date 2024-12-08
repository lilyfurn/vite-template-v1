import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu after navigation
  };
  return (
    <div className=" max-w-[1200px] ">
      {/* Header */}
      <header className="bg-white lg:max-w-[1200px] lg:mx-auto lg:relative fixed top-0 left-0 w-full shadow-md p-4 flex items-center z-50">
        {/* Company Name */}
        <div
          className="inline-flex  text-black font-bold grow cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/LaibelLabsHeaderLogo.png"
            alt="Laibel Labs Logo"
            className=" mr-2"
          />
          <div className="text-gray-800 my-auto font-bold text-3xl text-shadow">
            LAIBEL LABS
          </div>
        </div>

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
            <div
              className="block text-gray-700 text-lg hover:text-blue-600 cursor-pointer"
              onClick={() => handleNavigate("/launches")}
            >
              LAUNCHES
            </div>
            <div
              className="block text-gray-700 text-lg hover:text-blue-600 cursor-pointer"
              onClick={() => handleNavigate("/mission")}
            >
              MISSION
            </div>
            <div
              className="block text-gray-700 text-lg hover:text-blue-600 cursor-pointer"
              onClick={() => handleNavigate("/services")}
            >
              SERVICES
            </div>
            <div
              className="block text-gray-700 text-lg hover:text-blue-600 cursor-pointer"
              onClick={() => handleNavigate("/contact")}
            >
              CONTACT
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
