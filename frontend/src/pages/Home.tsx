import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaCar, FaUsers, FaHandshake, FaChevronRight } from 'react-icons/fa'
import HeroSlider from '../components/home/HeroSlider'
import FeaturedCarsSlider from '../components/home/FeaturedCarsSlider'
import { Car } from '../types/car'
import { fetchFeaturedCars } from '../services/api'
import { adaptCarFromBackend } from '../utils/carAdapter'
import CountryStockSection from '../components/home/CountryStockSection'
import SearchBar from '@/components/home/SearchBar'

const Home = () => {
  const [featuredCars, setFeaturedCars] = useState<Car[]>([]);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    const getFeatured = async () => {
      // Prevent duplicate API calls
      if (dataFetchedRef.current) return;
      console.log("Fetching featured cars - first time");
      
      try {
        const carsData = await fetchFeaturedCars();
        const adaptedCars = carsData.map(car => adaptCarFromBackend(car));
        setFeaturedCars(adaptedCars);
        dataFetchedRef.current = true;
      } catch (error) {
        console.error('Error fetching featured cars:', error);
      }
    };

    getFeatured();
  }, []);

  return (
    <>
      {/* Hero Slider Section */}
      <section>
        <HeroSlider />
      </section>

      {/* Search Section */}

      <section className="py-12 bg-gray-100">
  <div className="container">
    <SearchBar />
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

      {/* Add Country Stock Section here */}
      <CountryStockSection />

      
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
