import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaClock, FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import { cn } from '../../utils/cn'

interface HeaderProps {
  onSearchClick?: () => void
}

const Header = ({ onSearchClick }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <header>
      {/* Top Header */}
      <div className="bg-secondary-800 text-white py-2">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-2 md:mb-0">
              <a href="tel:+81-3-1234-5678" className="flex items-center text-sm">
                <FaPhone className="mr-2" />
                +81-3-1234-5678
              </a>
              <a href="mailto:info@Japan Auto Exchange.jp" className="flex items-center text-sm">
                <FaEnvelope className="mr-2" />
                info@Japan Auto Exchange.jp
              </a>
              <span className="flex items-center text-sm">
                <FaClock className="mr-2" />
                Mon - Sun: 9:00am - 6:00pm
              </span>
            </div>
            <div className="flex gap-4">
              <Link to="/login" className="text-sm hover:text-primary-200">Login</Link>
              <Link to="/signup" className="text-sm hover:text-primary-200">Register</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={cn(
          "py-4 bg-white transition-all duration-300 border-b",
          isScrolled && "shadow-md sticky top-0 z-40"
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="img/logos/black-logo.png" alt="Japan Auto Exchange" className="h-10" />
            </Link>


            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-secondary-800 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <Link
                    to="/"
                    className={cn(
                      "font-medium hover:text-primary",
                      location.pathname === '/' && "text-primary"
                    )}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cars"
                    className={cn(
                      "font-medium hover:text-primary",
                      location.pathname === '/cars' && "text-primary"
                    )}
                  >
                    Cars
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={cn(
                      "font-medium hover:text-primary",
                      location.pathname === '/about' && "text-primary"
                    )}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className={cn(
                      "font-medium hover:text-primary",
                      location.pathname === '/services' && "text-primary"
                    )}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={cn(
                      "font-medium hover:text-primary",
                      location.pathname === '/contact' && "text-primary"
                    )}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <button
                    onClick={onSearchClick}
                    className="font-medium hover:text-primary focus:outline-none"
                  >
                    <FaSearch />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center">
              <img src="img/logos/black-logo.png" alt="Japan Auto Exchange" className="h-10" />
            </Link>
            <button
              className="text-secondary-800 focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaTimes size={24} />
            </button>
          </div>

          <nav>
            <ul className="space-y-6">
              <li>
                <Link
                  to="/"
                  className={cn(
                    "block text-xl font-medium hover:text-primary",
                    location.pathname === '/' && "text-primary"
                  )}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cars"
                  className={cn(
                    "block text-xl font-medium hover:text-primary",
                    location.pathname === '/cars' && "text-primary"
                  )}
                >
                  Cars
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={cn(
                    "block text-xl font-medium hover:text-primary",
                    location.pathname === '/about' && "text-primary"
                  )}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={cn(
                    "block text-xl font-medium hover:text-primary",
                    location.pathname === '/services' && "text-primary"
                  )}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={cn(
                    "block text-xl font-medium hover:text-primary",
                    location.pathname === '/contact' && "text-primary"
                  )}
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onSearchClick) {
                      onSearchClick()
                      setMobileMenuOpen(false)
                    }
                  }}
                  className="flex items-center text-xl font-medium hover:text-primary focus:outline-none"
                >
                  <FaSearch className="mr-2" /> Search
                </button>
              </li>
            </ul>
          </nav>

          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-col gap-4">
              <Link to="/login" className="btn btn-primary w-full">Login</Link>
              <Link to="/signup" className="btn btn-outline w-full">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
