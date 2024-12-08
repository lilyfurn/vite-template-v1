import { useNavigate } from "react-router-dom";
import { Telegram } from "@mui/icons-material";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">Laibel Labs</h3>
            <p className="mt-4 text-sm">
              Empowering businesses with cutting-edge blockchain and AI
              technology. Join us in shaping the future of innovation.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="uppercase">
            <h3 className="text-lg font-semibold text-white">QUICK LINKS</h3>
            <div className="mt-4 space-y-2">
              <div
                className="hover:underline cursor-pointer"
                onClick={() => handleNavigate("/launches")}
              >
                LAUNCHES
              </div>
              <div
                className="hover:underline cursor-pointer"
                onClick={() => handleNavigate("/mission")}
              >
                MISSION
              </div>
              <div
                className="hover:underline cursor-pointer"
                onClick={() => handleNavigate("/services")}
              >
                SERVICES
              </div>
              <div
                className="hover:underline cursor-pointer"
                onClick={() => handleNavigate("/contact")}
              >
                CONTACT
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.t.me/LaibelLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <Telegram fontSize="large" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} LAIBEL LABS LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
