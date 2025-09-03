import { Link, useLocation } from 'react-router-dom';
import { FaUsers, FaChartBar, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

function AdminSidebar() {
  const location = useLocation();
  
  const menuItems = [
    {
      path: '/admin/infos-clients',
      label: 'Infos clients',
      icon: <FaUsers className="w-5 h-5" />
    },
    {
      path: '/admin/dashboard',
      label: 'Dashboard',
      icon: <MdDashboard className="w-5 h-5" />
    },
    {
      path: '/admin/analytics',
      label: 'Analytics',
      icon: <FaChartBar className="w-5 h-5" />
    },
    {
      path: '/admin/settings',
      label: 'Settings',
      icon: <FaCog className="w-5 h-5" />
    }
  ];

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold text-red-400">GO-MAKKAH</h2>
        <p className="text-sm text-gray-400">Admin Panel</p>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <Link
          to="/"
          className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
        >
          <FaSignOutAlt className="w-5 h-5" />
          <span>Retour au site</span>
        </Link>
      </div>
    </div>
  );
}

export default AdminSidebar;