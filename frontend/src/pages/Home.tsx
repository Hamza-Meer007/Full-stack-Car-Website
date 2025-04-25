import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaCar, FaUsers, FaHandshake, FaChevronRight } from 'react-icons/fa'
import HeroSlider from '../components/home/HeroSlider'
import FeaturedCarsSlider from '../components/home/FeaturedCarsSlider'
import { Car } from '../types/car'
import { fetchFeaturedCars } from '../services/api'
import { adaptCarFromBackend } from '../utils/carAdapter'

const Home = () => {
  const [featuredCars, setFeaturedCars] = useState<Car[]>([])

  useEffect(() => {
    // Fetch featured cars from the backend
    const getFeatured = async () => {
      try {
        const carsData = await fetchFeaturedCars()
        // Adapt the car data from backend format to frontend format
        const adaptedCars = carsData.map(car => adaptCarFromBackend(car))
        setFeaturedCars(adaptedCars)
      } catch (error) {
        console.error('Error fetching featured cars:', error)
      }
    }

    getFeatured()
  }, [])

  return (
    <>
      {/* Hero Slider Section */}
      <section>
        <HeroSlider />
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-100">
        <div className="container">
          <div className="bg-white rounded-lg shadow-lg p-6 -mt-24 relative z-20">
            <h2 className="text-2xl font-bold mb-6 text-center">Find Your Dream Car</h2>
            <form className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Make</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary">
                  <option value="">Any Make</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Honda">Honda</option>
                  <option value="Nissan">Nissan</option>
                  <option value="Mazda">Mazda</option>
                  <option value="Subaru">Subaru</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Model</label>
                <input
                  type="text"
                  placeholder="Any Model"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Body Type</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary">
                  <option value="">Any Type</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Coupe">Coupe</option>
                  <option value="Kei Car">Kei Car</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Price Range</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary">
                  <option value="">Any Price</option>
                  <option value="1000000-2000000">¥1,000,000 - ¥2,000,000</option>
                  <option value="2000000-3000000">¥2,000,000 - ¥3,000,000</option>
                  <option value="3000000-5000000">¥3,000,000 - ¥5,000,000</option>
                  <option value="5000000-10000000">¥5,000,000 - ¥10,000,000</option>
                  <option value="10000000-">¥10,000,000+</option>
                </select>
              </div>
              <div className="flex items-end">
                <button type="submit" className="btn btn-primary w-full">
                  <FaSearch className="mr-2" />
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Cars</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our selection of premium vehicles, hand-picked for their exceptional quality, performance, and value.
            </p>
          </div>

          <FeaturedCarsSlider cars={featuredCars} />

          <div className="text-center mt-10">
            <Link to="/cars" className="btn btn-primary">
              View All Cars
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Japan Auto Exchange</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service and the best car buying experience in Japan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCar className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Wide Selection</h3>
              <p className="text-gray-600">
                Choose from hundreds of quality vehicles, from compact kei cars to luxury sedans and SUVs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our knowledgeable staff provides personalized assistance to help you find the perfect vehicle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trusted Dealer</h3>
              <p className="text-gray-600">
                With over 20 years in the business, we've built a reputation for honesty, quality, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their Japan Auto Exchange experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/img/avatar/avatar-1.jpg" alt="Customer" className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-bold">Tanaka Hiroshi</h4>
                  <p className="text-gray-500 text-sm">Tokyo</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "I was looking for a reliable family car, and Japan Auto Exchange made the process so easy. Their staff was knowledgeable and helped me find the perfect Toyota for my needs."
              </p>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/img/avatar/avatar-2.jpg" alt="Customer" className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-bold">Suzuki Akiko</h4>
                  <p className="text-gray-500 text-sm">Osaka</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The financing options at Japan Auto Exchange were excellent. I got a great rate on my new Honda, and the paperwork was handled efficiently. Highly recommend!"
              </p>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="/img/avatar/avatar-9.jpg" alt="Customer" className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-bold">Yamamoto Ken</h4>
                  <p className="text-gray-500 text-sm">Nagoya</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "I've bought three cars from Japan Auto Exchange over the years, and each experience has been fantastic. Their after-sales service is exceptional, and they truly care about customer satisfaction."
              </p>
              <div className="flex text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-3xl font-bold mb-2">Ready to Find Your Dream Car?</h2>
              <p className="text-white text-opacity-90">
                Visit our showroom or browse our inventory online today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cars" className="btn bg-white text-primary hover:bg-gray-100">
                Browse Inventory
              </Link>
              <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary">
                Contact Us <FaChevronRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
