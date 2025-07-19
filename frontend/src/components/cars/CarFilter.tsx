import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { fetchCarMakes, fetchCountryStocks, fetchFuelTypes, fetchTransmissions } from '../../services/api'

interface FilterValues {
  make: string
  model: string
  minYear: string
  maxYear: string
  fuelType: string
  transmission: string
  country: string
  priceRange: string
}

interface CarFilterProps {
  onFilter: (filters: FilterValues) => void
}

const CarFilter = ({ onFilter }: CarFilterProps) => {
  const [filters, setFilters] = useState<FilterValues>({
    make: '',
    model: '',
    minYear: '',
    maxYear: '',
    fuelType: '',
    transmission: '',
    country: '',
    priceRange: ''
  })

  // State for backend data
  const [makes, setMakes] = useState<string[]>([])
  const [countries, setCountries] = useState<any[]>([])
  const [fuelTypes, setFuelTypes] = useState<string[]>([])
  const [transmissions, setTransmissions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  // Fetch initial data on component mount
  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true)
      try {
        // Fetch all dropdown data using the centralized API functions
        const [makesData, countriesData, fuelTypesData, transmissionsData] = await Promise.all([
          fetchCarMakes(),
          fetchCountryStocks(),
          fetchFuelTypes(),
          fetchTransmissions()
        ])

        console.log('All data fetched:', { makesData, countriesData, fuelTypesData, transmissionsData })

        setMakes(makesData)
        setCountries(countriesData)
        setFuelTypes(fuelTypesData)
        setTransmissions(transmissionsData)
      } catch (error) {
        console.error('Error fetching initial data:', error)
        // Set fallback data
        setMakes(['Toyota', 'Honda', 'Nissan', 'Mazda', 'Subaru', 'Mitsubishi', 'Lexus', 'Suzuki'])
        setFuelTypes(['Petrol', 'Diesel', 'Hybrid', 'LPG'])
        setTransmissions(['Automatic', 'Manual', 'CVT', 'Semi-Automatic'])
        setCountries([
          { code: 'jp', name: 'Japan' },
          { code: 'mm', name: 'Myanmar' },
          { code: 'gb', name: 'United Kingdom' },
          { code: 'jm', name: 'Jamaica' },
          { code: 'tt', name: 'Trinidad and Tobago' },
          { code: 'au', name: 'Australia' },
          { code: 'mu', name: 'Mauritius' },
          { code: 'gy', name: 'Guyana' },
          { code: 'tz', name: 'Tanzania' },
          { code: 'ie', name: 'Ireland' },
          { code: 'ke', name: 'Kenya' },
          { code: 'zm', name: 'Zambia' },
          { code: 'nz', name: 'New Zealand' }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchInitialData()
  }, [])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
  const { name, value } = e.target
  
  // Simply set the priceRange value without converting to min/max
  setFilters(prev => ({ ...prev, [name]: value }))
}
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFilter(filters)
  }

  const resetFilters = () => {
    const resetValues = {
      make: '',
      model: '',
      minYear: '',
      maxYear: '',
      fuelType: '',
      transmission: '',
      country: '',
      priceRange: ''
    }
    setFilters(resetValues)
    onFilter(resetValues)
  }

  // Generate years from current year to 30 years back
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 31 }, (_, i) => (currentYear - i).toString())

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-medium mb-6">Find Your Dream Car</h3>
      
      <form onSubmit={handleSubmit}>
        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Make */}
          <div>
            <label className="block text-sm font-medium mb-1">Make</label>
            <select
              name="make"
              value={filters.make}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              disabled={loading}
            >
              <option value="">Any Make</option>
              {makes.map(make => (
                <option key={make} value={make}>{make}</option>
              ))}
            </select>
          </div>
          
          {/* Model */}
          <div>
            <label className="block text-sm font-medium mb-1">Model</label>
            <input
              type="text"
              name="model"
              value={filters.model}
              onChange={handleChange}
              placeholder="Enter model name"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium mb-1">Price Range</label>
            <select
              name="priceRange"
              value={filters.priceRange}
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            >
              <option value="">Any Price</option>
              <option value="1000000-2000000">¥1,000,000 - ¥2,000,000</option>
              <option value="2000000-3000000">¥2,000,000 - ¥3,000,000</option>
              <option value="3000000-5000000">¥3,000,000 - ¥5,000,000</option>
              <option value="5000000-10000000">¥5,000,000 - ¥10,000,000</option>
              <option value="10000000-">¥10,000,000+</option>
            </select>
          </div>
          
          {/* Min Year */}
          <div>
            <label className="block text-sm font-medium mb-1">Min Year</label>
            <select
              name="minYear"
              value={filters.minYear}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            >
              <option value="">Any Year</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          
          {/* Max Year */}
          <div>
            <label className="block text-sm font-medium mb-1">Max Year</label>
            <select
              name="maxYear"
              value={filters.maxYear}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            >
              <option value="">Any Year</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          
          {/* Fuel Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Fuel Type</label>
            <select
              name="fuelType"
              value={filters.fuelType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              disabled={loading}
            >
              <option value="">Any Fuel Type</option>
              {fuelTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          {/* Transmission */}
          <div>
            <label className="block text-sm font-medium mb-1">Transmission</label>
            <select
              name="transmission"
              value={filters.transmission}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              disabled={loading}
            >
              <option value="">Any Transmission</option>
              {transmissions.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <select
              name="country"
              value={filters.country}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              disabled={loading}
            >
              <option value="">Any Country</option>
              {countries.map(country => (
                <option key={country.code || country} value={country.code || country}>
                  {country.code || country}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Debug Info - Remove in production
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-4 p-2 bg-gray-100 rounded text-xs">
            <p>Debug: Countries loaded: {countries.length}</p>
            <p>Loading: {loading ? 'Yes' : 'No'}</p>
          </div>
        )} */}
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="btn btn-primary flex-1 flex items-center justify-center"
            disabled={loading}
          >
            <FaSearch className="mr-2" />
            {loading ? 'Loading...' : 'Search Cars'}
          </button>
          <button
            type="button"
            onClick={resetFilters}
            className="btn btn-outline flex-1"
            disabled={loading}
          >
            Reset Filters
          </button>
        </div>
      </form>
    </div>
  )
}

export default CarFilter