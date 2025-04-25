import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">About Japan Auto Exchange</h3>
            <p className="text-gray-400 mb-6">
              Japan Auto Exchange is Japan's premier car dealership offering a wide selection of quality vehicles. 
              We provide exceptional service and competitive pricing for all your automotive needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-600 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-600 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-600 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary-600 transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary" />
                <span>1-2-3 Shibuya, Shibuya-ku, Tokyo, Japan 150-0002</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-primary" />
                <a href="tel:+81-3-1234-5678" className="hover:text-primary">+81-3-1234-5678</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-primary" />
                <a href="mailto:info@Japan Auto Exchange.jp" className="hover:text-primary">info@Japan Auto Exchange.jp</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/cars" className="hover:text-primary transition-colors">Car Inventory</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-primary transition-colors">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-primary transition-colors">Register</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive the latest updates and offers.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 rounded-l-md focus:outline-none text-secondary-800"
                />
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary-600 px-4 py-2 rounded-r-md transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} <span className="text-primary">Japan Auto Exchange</span>. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
