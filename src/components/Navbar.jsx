import { FaUserCircle } from 'react-icons/fa';
import { MdContactSupport } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const routes = [
    { path: "/", label: "Accueil" },
    { path: "/omra", label: "Omra" },
    { path: "/omra-combinee", label: "Omra combinée" },
    { path: "/hajj", label: "Hajj" },
    { path: "/voyages-monde", label: "Voyages Monde" },
    { path: "/nos-services", label: "Nos services" }
  ]
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#b91c1c] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">GO-MAKKAH</h1>
            <p className="text-sm">Quand foi et prestige se rencontrent</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold">01 49 87 70 21</p>
            <p className="text-sm">32 avenue Pierre Semarde, 94200</p>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="space-x-8">
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
            <Link to="/mon-compte" className="text-gray-700 hover:text-gray-900 flex items-center">
              <span className="mr-2"><FaUserCircle /></span> Mon compte
            </Link>
            <Link to="/espace-client" className="text-gray-700 hover:text-gray-900 flex items-center">
              <span className="mr-2"><MdContactSupport /></span> Espace client
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
