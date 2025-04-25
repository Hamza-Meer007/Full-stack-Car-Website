import { Link } from 'react-router-dom'
import { FaHome, FaCar, FaPhone } from 'react-icons/fa'

const NotFound = () => {
  return (
    <section className="py-20 flex items-center min-h-screen bg-gray-100">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="btn btn-primary flex items-center justify-center">
              <FaHome className="mr-2" />
              Back to Home
            </Link>
            <Link to="/cars" className="btn btn-outline flex items-center justify-center">
              <FaCar className="mr-2" />
              Browse Cars
            </Link>
            <Link to="/contact" className="btn btn-secondary flex items-center justify-center">
              <FaPhone className="mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
