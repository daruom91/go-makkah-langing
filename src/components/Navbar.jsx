import { FaUserCircle } from 'react-icons/fa';
import { MdContactSupport } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes = [
    { path: "/home", label: "Accueil" },
    { path: "/omra", label: "Omra" },
    { path: "/omra-combinee", label: "Omra combinée" },
    { path: "/hajj", label: "Hajj" },
    { path: "/voyages-monde", label: "Voyages Monde" },
    { path: "/nos-services", label: "Nos services" }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#b91c1c] text-white p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">GO-MAKKAH</h1>
            <p className="text-sm">Quand foi et prestige se rencontrent</p>
          </div>
          <div className="text-center md:text-right mt-2 md:mt-0">
            <p className="text-xl font-bold">01 49 87 70 21</p>
            <p className="text-sm">32 avenue Pierre Semarde, 94200</p>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 flex-1 justify-between">
              <div className="space-x-6">
                {routes.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={location.pathname === link.path
                      ? "text-red-700 border-b-2 border-red-700 pb-1"
                      : "text-gray-700 hover:text-gray-900"
                    }
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="space-x-4 flex items-center">
                <Link to="/admin" className="text-gray-700 hover:text-gray-900 flex items-center">
                  <span className="mr-2"><FaUserCircle /></span> Mon compte
                </Link>
                <Link to="/espace-client" className="text-gray-700 hover:text-gray-900 flex items-center">
                  <span className="mr-2"><MdContactSupport /></span> Espace client
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-2">
              <div className="flex flex-col space-y-3">
                {routes.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={location.pathname === link.path
                      ? "text-red-700 border-l-4 border-red-700 pl-2 py-1"
                      : "text-gray-700 hover:text-gray-900 pl-2 py-1"
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-gray-200 pt-3 mt-2 space-y-3">
                  <Link
                    to="/mon-compte"
                    className="text-gray-700 hover:text-gray-900 flex items-center pl-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-2"><FaUserCircle /></span> Mon compte
                  </Link>
                  <Link
                    to="/espace-client"
                    className="text-gray-700 hover:text-gray-900 flex items-center pl-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-2"><MdContactSupport /></span> Espace client
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
