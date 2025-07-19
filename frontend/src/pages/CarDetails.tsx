import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaHeart, FaRegHeart, FaShare, FaPrint, FaCheck, FaPhone, FaEnvelope } from 'react-icons/fa'
import CarGallery from '../components/cars/CarGallery'
import CarCard from '../components/cars/CarCard'
import { Car } from '../types/car'
import { fetchCarById, fetchCars } from '../services/api'
import { adaptCarFromBackend } from '../utils/carAdapter'

const CarDetails = () => {
  const { id } = useParams<{ id: string }>()
  const [car, setCar] = useState<Car | null>(null)
  const [relatedCars, setRelatedCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'specifications'>('overview')
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // Function to fetch car data
    const fetchCarData = async () => {
      setLoading(true)
      try {
        if (id) {
          // Fetch the car data
          const carData = await fetchCarById(id)
          if (carData) {
            // Adapt the car data to frontend format
            const adaptedCar = adaptCarFromBackend(carData)
            setCar(adaptedCar)

            // Fetch related cars (cars with the same make or similar properties)
            const allCars = await fetchCars()
            const adaptedCars = allCars.map(c => adaptCarFromBackend(c))

            // Filter related cars (same make or similar properties)
            const related = adaptedCars
              .filter(c => c.id !== adaptedCar.id &&
                (c.make === adaptedCar.make || c.fuel_type === adaptedCar.fuel_type))
              .slice(0, 4) // Limit to 4 related cars

            setRelatedCars(related)
          }
        }
      } catch (error) {
        console.error('Error fetching car details:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCarData()
  }, [id])

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  // Function to get country name from country code
  const getCountryName = (countryCode: string) => {
    const countryMap: { [key: string]: string } = {
      'jp': 'Japan',
      'mm': 'Myanmar',
      'gb': 'United Kingdom',
      'jm': 'Jamaica',
      'tt': 'Trinidad and Tobago',
      'au': 'Australia',
      'mu': 'Mauritius',
      'gy': 'Guyana',
      'tz': 'Tanzania',
      'ie': 'Ireland',
      'ke': 'Kenya',
      'zm': 'Zambia',
      'nz': 'New Zealand'
    }
    return countryMap[countryCode?.toLowerCase()] || countryCode
  }

  if (loading) {
    return (
      <div className="container py-16 flex justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    )
  }

  if (!car) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Car Not Found</h2>
        <p className="mb-6">The car you're looking for doesn't exist or has been removed.</p>
        <Link to="/cars" className="btn btn-primary">
          Browse All Cars
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* Page Header with Background Image */}
      <section 
        className="relative py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${car.mainImage || car.images?.[0] || '/img/default-car.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '500px'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-xl">
              {car.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
              <div className="flex items-center text-gray-100 text-lg">
                <FaMapMarkerAlt className="mr-2 text-red-400" />
                <span className="font-medium">{car.location}</span>
              </div>
              
              {car.country && (
                <div className="flex items-center text-gray-100 text-lg">
                  <span className="font-medium">{getCountryName(car.country)}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg bg-primary/20 px-6 py-3 rounded-lg backdrop-blur-sm">
                {car.price ? `¥${car.price.toLocaleString()}` : 'Price on request'}
              </div>
              
              {car.status && (
                <div className="inline-block px-6 py-3 bg-primary text-white text-sm font-medium rounded-full shadow-lg">
                  {car.status}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Car Gallery */}
              <CarGallery images={car.images} title={car.title} />

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <button
                  onClick={toggleFavorite}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  {isFavorite ? (
                    <>
                      <FaHeart className="mr-2 text-primary" />
                      <span>Saved to Favorites</span>
                    </>
                  ) : (
                    <>
                      <FaRegHeart className="mr-2" />
                      <span>Save to Favorites</span>
                    </>
                  )}
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                  <FaShare className="mr-2" />
                  <span>Share</span>
                </button>
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                  <FaPrint className="mr-2" />
                  <span>Print</span>
                </button>
              </div>

              {/* Tabs */}
              <div className="mt-8 border-b border-gray-300">
                <div className="flex overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                      activeTab === 'overview'
                        ? 'border-b-2 border-primary text-primary'
                        : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('features')}
                    className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                      activeTab === 'features'
                        ? 'border-b-2 border-primary text-primary'
                        : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    Features
                  </button>
                  <button
                    onClick={() => setActiveTab('specifications')}
                    className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                      activeTab === 'specifications'
                        ? 'border-b-2 border-primary text-primary'
                        : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    Specifications
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="mt-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Description</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {car.description || 'No description available for this vehicle.'}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-medium mb-3">Car Details</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-gray-600">Make:</span>
                            <span className="font-medium">{car.make || 'N/A'}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Model:</span>
                            <span className="font-medium">{car.model || 'N/A'}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Year:</span>
                            <span className="font-medium">{car.year || 'N/A'}</span>
                          </li>
                          {/* <li className="flex justify-between">
                            <span className="text-gray-600">Body Type:</span>
                            <span className="font-medium">{car.bodyType || car.condition || 'N/A'}</span>
                          </li> */}
                          <li className="flex justify-between">
                            <span className="text-gray-600">Mileage:</span>
                            <span className="font-medium">{car.mileage ? `${car.mileage.toLocaleString()} km` : (car.milage ? `${car.milage.toLocaleString()} km` : 'N/A')}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Country:</span>
                            <span className="font-medium">{car.country ? getCountryName(car.country) : 'N/A'}</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium mb-3">Technical Details</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-gray-600">Fuel Type:</span>
                            <span className="font-medium">{car.fuelType || car.fuel_type || 'N/A'}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Engine:</span>
                            <span className="font-medium">{car.engine || (car.engine_size ? `${car.engine_size}L` : 'N/A')}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Transmission:</span>
                            <span className="font-medium">{car.transmission || 'N/A'}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Color:</span>
                            <span className="font-medium">{car.color || 'N/A'}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Drive Type:</span>
                            <span className="font-medium">{car.drive_type || 'N/A'}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Features Tab */}
                {activeTab === 'features' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Features & Options</h3>
                    {car.features && car.features.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {car.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <FaCheck className="text-primary mr-2" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-600">No specific features listed for this vehicle.</p>
                    )}
                  </div>
                )}

                {/* Specifications Tab */}
                {activeTab === 'specifications' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                    {car.specifications && Object.keys(car.specifications).length > 0 ? (
                      <div className="border rounded-lg overflow-hidden">
                        <table className="w-full">
                          <tbody>
                            {Object.entries(car.specifications).map(([key, value], index) => (
                              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="px-6 py-3 text-gray-600">{key}</td>
                                <td className="px-6 py-3 font-medium">{value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-gray-600">No detailed specifications available for this vehicle.</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Interested in this car?</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      rows={4}
                      placeholder="I'm interested in this car. Please contact me."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Dealer Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Dealer Information</h3>
                <div className="flex items-center mb-4">
                  <img
                    src="/img/dealer-logo.png"
                    alt="Japan Auto Exchange"
                    className="w-16 h-16 object-contain mr-4"
                  />
                  <div>
                    <h4 className="font-bold">Japan Auto Exchange Tokyo</h4>
                    <p className="text-gray-600 text-sm">Premium Car Dealership</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="mt-1 mr-3 text-primary" />
                    <span>1-2-3 Shibuya, Shibuya-ku, Tokyo, Japan 150-0002</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-3 text-primary" />
                    <a href="tel:+81-3-1234-5678" className="hover:text-primary">+81-3-1234-5678</a>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="mr-3 text-primary" />
                    <a href="mailto:info@Japan Auto Exchange.jp" className="hover:text-primary">info@Japan Auto Exchange.jp</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="tel:+81-3-1234-5678" className="btn btn-primary flex-1">
                    Call Now
                  </a>
                  <Link to="/contact" className="btn btn-outline flex-1">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cars */}
      {relatedCars.length > 0 && (
        <section className="py-12 bg-gray-100">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Similar Cars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {relatedCars.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default CarDetails