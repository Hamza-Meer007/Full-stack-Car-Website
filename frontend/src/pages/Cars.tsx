import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { FaList, FaTh, FaSort, FaMapMarkerAlt, FaExpand } from 'react-icons/fa'
import CarCard from '../components/cars/CarCard'
import CarFilter from '../components/cars/CarFilter'
import { Car } from '../types/car'
import { cn } from '../utils/cn'
import { fetchCars } from '../services/api'
import { adaptCarFromBackend } from '../utils/carAdapter'

const Cars = () => {
  const [searchParams] = useSearchParams()
  const [filteredCars, setFilteredCars] = useState<Car[]>([])
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortOption, setSortOption] = useState<string>('default')
  const [loading, setLoading] = useState(true)

  // Get search query from URL if any
  const searchQuery = searchParams.get('search') || ''

  // Fetch all cars from the backend
  const [allCars, setAllCars] = useState<Car[]>([])

  // Fetch cars on component mount
  useEffect(() => {
    const getCars = async () => {
      setLoading(true)
      try {
        const carsData = await fetchCars()
        // Adapt the car data from backend format to frontend format
        const adaptedCars = carsData.map(car => adaptCarFromBackend(car))
        setAllCars(adaptedCars)
      } catch (error) {
        console.error('Error fetching cars:', error)
      } finally {
        setLoading(false)
      }
    }

    getCars()
  }, [])

  // Filter and sort cars when search query, sort option, or all cars change
  useEffect(() => {
    if (allCars.length === 0) return

    setLoading(true)

    // Create a copy of all cars to filter and sort
    let filtered = [...allCars]

    // Apply search query filter if exists
    if (searchQuery) {
      filtered = filtered.filter(car =>
        car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (car.make && car.make.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (car.model && car.model.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        filtered.sort((a, b) => (a.price || 0) - (b.price || 0))
        break
      case 'price-high':
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0))
        break
      case 'year-new':
        filtered.sort((a, b) => (b.year || 0) - (a.year || 0))
        break
      case 'year-old':
        filtered.sort((a, b) => (a.year || 0) - (b.year || 0))
        break
      default:
        // Default sorting (featured first, then by id)
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return String(a.id).localeCompare(String(b.id))
        })
    }

    setFilteredCars(filtered)
    setLoading(false)
  }, [searchQuery, sortOption, allCars])

  const handleFilter = (filters: any) => {
    setLoading(true)

    // Filter the cars based on the provided filters
    let filtered = [...allCars]

    // Apply make filter
    if (filters.make && filters.make !== 'all') {
      filtered = filtered.filter(car => car.make === filters.make)
    }

    // Apply model filter
    if (filters.model && filters.model !== 'all') {
      filtered = filtered.filter(car => car.model === filters.model)
    }

    // Apply year filter
    if (filters.yearFrom) {
      filtered = filtered.filter(car => (car.year || 0) >= filters.yearFrom)
    }
    if (filters.yearTo) {
      filtered = filtered.filter(car => (car.year || 0) <= filters.yearTo)
    }

    // Apply price filter
    if (filters.priceFrom) {
      filtered = filtered.filter(car => (car.price || 0) >= filters.priceFrom)
    }
    if (filters.priceTo) {
      filtered = filtered.filter(car => (car.price || 0) <= filters.priceTo)
    }

    // Apply fuel type filter
    if (filters.fuelType && filters.fuelType !== 'all') {
      filtered = filtered.filter(car => car.fuel_type === filters.fuelType)
    }

    // Apply transmission filter
    if (filters.transmission && filters.transmission !== 'all') {
      filtered = filtered.filter(car => car.transmission === filters.transmission)
    }

    setFilteredCars(filtered)
    setLoading(false)
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-secondary-800 py-16 text-white">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Car Inventory</h1>
          <p className="text-lg">
            {searchQuery
              ? `Search results for "${searchQuery}"`
              : 'Browse our extensive collection of quality vehicles'}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <CarFilter onFilter={handleFilter} />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Controls */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                  <p className="text-gray-600">
                    Showing <span className="font-medium">{filteredCars.length}</span> cars
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  {/* View Mode */}
                  <div className="flex border rounded-md overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={cn(
                        "p-2 flex items-center justify-center",
                        viewMode === 'grid'
                          ? "bg-primary text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      )}
                    >
                      <FaTh />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={cn(
                        "p-2 flex items-center justify-center",
                        viewMode === 'list'
                          ? "bg-primary text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      )}
                    >
                      <FaList />
                    </button>
                  </div>

                  {/* Sort */}
                  <div className="relative">
                    <div className="flex items-center border rounded-md p-2">
                      <FaSort className="mr-2 text-gray-600" />
                      <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="bg-transparent appearance-none focus:outline-none pr-8"
                      >
                        <option value="default">Default</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="year-new">Year: Newest First</option>
                        <option value="year-old">Year: Oldest First</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Loading State */}
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary"></div>
                </div>
              ) : (
                <>
                  {/* No Results */}
                  {filteredCars.length === 0 ? (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                      <h3 className="text-xl font-medium mb-2">No cars found</h3>
                      <p className="text-gray-600 mb-4">
                        Try adjusting your search criteria or filters to find more results.
                      </p>
                      <button
                        onClick={() => handleFilter({})}
                        className="btn btn-primary"
                      >
                        Reset Filters
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Grid View */}
                      {viewMode === 'grid' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {filteredCars.map(car => (
                            <CarCard key={car.id} car={car} />
                          ))}
                        </div>
                      )}

                      {/* List View */}
                      {viewMode === 'list' && (
                        <div className="space-y-6">
                          {filteredCars.map(car => (
                            <div key={car.id} className="car-box flex flex-col md:flex-row group">
                              <div className="car-thumbnail md:w-1/3 relative">
                                <Link to={`/cars/${car.id}`} className="block relative">
                                  {car.status && (
                                    <div className="tag">{car.status}</div>
                                  )}
                                  <div className="price-box">
                                    <span>{car.price ? `¥${car.price.toLocaleString()}` : 'Price on request'}</span>
                                  </div>
                                  <img
                                    src={car.mainImage}
                                    alt={car.title}
                                    className="w-full h-60 md:h-full object-cover"
                                  />

                                  {/* Overlay */}
                                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="flex space-x-3">
                                      <Link
                                        to={`/cars/${car.id}`}
                                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                      >
                                        <FaExpand />
                                      </Link>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                              <div className="p-6 md:w-2/3">
                                <div className="flex justify-between items-start">
                                  <h3 className="text-xl font-medium">
                                    <Link to={`/cars/${car.id}`} className="hover:text-primary transition-colors">
                                      {car.title}
                                    </Link>
                                  </h3>
                                  <div className="text-xl font-bold text-primary">
                                    {car.price ? `¥${car.price.toLocaleString()}` : 'Price on request'}
                                  </div>
                                </div>
                                <div className="mt-2 text-gray-500 flex items-center">
                                  <FaMapMarkerAlt className="mr-1 text-primary" />
                                  <span>{car.location}</span>
                                </div>
                                <div className="mt-4 grid grid-cols-2 gap-2">
                                  <div className="flex items-center text-sm">
                                    <span className="font-medium mr-2">Year:</span> {car.year || 'N/A'}
                                  </div>
                                  <div className="flex items-center text-sm">
                                    <span className="font-medium mr-2">Mileage:</span> {car.mileage ? `${car.mileage.toLocaleString()} km` : `${car.milage.toLocaleString()} km`}
                                  </div>
                                  <div className="flex items-center text-sm">
                                    <span className="font-medium mr-2">Fuel:</span> {car.fuelType || car.fuel_type}
                                  </div>
                                  <div className="flex items-center text-sm">
                                    <span className="font-medium mr-2">Transmission:</span> {car.transmission}
                                  </div>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                  {car.features && car.features.slice(0, 3).map((feature, index) => (
                                    <span key={index} className="car-feature">
                                      {feature}
                                    </span>
                                  ))}
                                  {car.features && car.features.length > 3 && (
                                    <span className="car-feature">
                                      +{car.features.length - 3} more
                                    </span>
                                  )}
                                </div>
                                <div className="mt-4">
                                  <Link
                                    to={`/cars/${car.id}`}
                                    className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                                  >
                                    View Details
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cars
