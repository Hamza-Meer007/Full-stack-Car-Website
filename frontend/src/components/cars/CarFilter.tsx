import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

interface FilterValues {
  make: string
  model: string
  minPrice: string
  maxPrice: string
  minYear: string
  maxYear: string
  bodyType: string
  fuelType: string
  transmission: string
}

interface CarFilterProps {
  onFilter: (filters: FilterValues) => void
}

const CarFilter = ({ onFilter }: CarFilterProps) => {
  const [filters, setFilters] = useState<FilterValues>({
    make: '',
    model: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: '',
    bodyType: '',
    fuelType: '',
    transmission: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFilter(filters)
  }

  const resetFilters = () => {
    setFilters({
      make: '',
      model: '',
      minPrice: '',
      maxPrice: '',
      minYear: '',
      maxYear: '',
      bodyType: '',
      fuelType: '',
      transmission: ''
    })
    onFilter({
      make: '',
      model: '',
      minPrice: '',
      maxPrice: '',
      minYear: '',
      maxYear: '',
      bodyType: '',
      fuelType: '',
      transmission: ''
    })
  }

  // Sample data for dropdowns
  const makes = ['Toyota', 'Honda', 'Nissan', 'Mazda', 'Subaru', 'Mitsubishi', 'Lexus', 'Suzuki']
  const bodyTypes = ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Wagon', 'Van', 'Truck']
  const fuelTypes = ['Gasoline', 'Diesel', 'Hybrid', 'Electric', 'Plug-in Hybrid']
  const transmissions = ['Automatic', 'Manual', 'CVT', 'Semi-Automatic']
  
  // Generate years from current year to 20 years back
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 21 }, (_, i) => (currentYear - i).toString())

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-medium mb-6">Find Your Dream Car</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {/* Make */}
          <div>
            <label className="block text-sm font-medium mb-1">Make</label>
            <select
              name="make"
              value={filters.make}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
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
              placeholder="Any Model"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
          
          {/* Body Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Body Type</label>
            <select
              name="bodyType"
              value={filters.bodyType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            >
              <option value="">Any Type</option>
              {bodyTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
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
            >
              <option value="">Any Transmission</option>
              {transmissions.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          {/* Min Price */}
          <div>
            <label className="block text-sm font-medium mb-1">Min Price (¥)</label>
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              placeholder="Min Price"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
          
          {/* Max Price */}
          <div>
            <label className="block text-sm font-medium mb-1">Max Price (¥)</label>
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              placeholder="Max Price"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
        
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="btn btn-primary flex-1 flex items-center justify-center"
          >
            <FaSearch className="mr-2" />
            Search Cars
          </button>
          <button
            type="button"
            onClick={resetFilters}
            className="btn btn-outline flex-1"
          >
            Reset Filters
          </button>
        </div>
      </form>
    </div>
  )
}

export default CarFilter
