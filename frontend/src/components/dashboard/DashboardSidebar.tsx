import { Link, useLocation } from 'react-router-dom'
import { 
  FaHome, 
  FaCar, 
  FaHeart, 
  FaComments, 
  FaUser, 
  FaCog, 
  FaSignOutAlt 
} from 'react-icons/fa'
import { cn } from '../../utils/cn'

const DashboardSidebar = () => {
  const location = useLocation()
  const pathname = location.pathname

  const navItems = [
    { icon: FaHome, label: 'Dashboard', path: '/dashboard' },
    { icon: FaCar, label: 'My Cars', path: '/dashboard/my-cars' },
    { icon: FaHeart, label: 'Favorites', path: '/dashboard/favorites' },
    { icon: FaComments, label: 'Messages', path: '/dashboard/messages' },
    { icon: FaUser, label: 'My Profile', path: '/dashboard/profile' },
    { icon: FaCog, label: 'Settings', path: '/dashboard/settings' },
  ]

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <div className="flex items-center mb-8">
          <img 
            src="/img/avatar/default-avatar.jpg" 
            alt="User Avatar" 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h3 className="font-medium">John Doe</h3>
            <p className="text-sm text-gray-500">Member since 2023</p>
          </div>
        </div>

        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center py-3 px-4 rounded-lg transition-colors",
                    pathname === item.path
                      ? "bg-primary text-white"
                      : "text-secondary-700 hover:bg-gray-100"
                  )}
                >
                  <item.icon className="mr-3" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}

            <li className="pt-4 mt-4 border-t border-gray-200">
              <button className="flex items-center py-3 px-4 rounded-lg text-red-500 hover:bg-gray-100 w-full transition-colors">
                <FaSignOutAlt className="mr-3" />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default DashboardSidebar
