import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaSearch, FaAngleRight } from 'react-icons/fa';
import { fetchCarMakes } from '../../services/api';

const SearchBar = () => {
  const [makes, setMakes] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useState({
    make: '',
    model: '',
    priceRange: '',
  });
  const navigate = useNavigate();

  // Fetch available makes from the backend
    useEffect(() => {
    const getMakes = async () => {
      try {
        const makesData = await fetchCarMakes();
        setMakes(makesData);
      } catch (error) {
        console.error('Error fetching car makes:', error);
        // Fallback to some common makes
        setMakes(['Toyota', 'Honda', 'Nissan', 'Mazda', 'Subaru']);
      }
    };

    getMakes();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build query parameters
    const params = new URLSearchParams();
    if (searchParams.make) params.append('make', searchParams.make);
    if (searchParams.model) params.append('model', searchParams.model);
    if (searchParams.priceRange) params.append('priceRange', searchParams.priceRange);
    
    // Navigate to cars page with search parameters
    navigate(`/cars?${params.toString()}`);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 relative -mt-24 z-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Find Your Dream Car</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Make</label>
          <select 
            name="make"
            value={searchParams.make}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          >
            <option value="">Any Make</option>
            {makes.map(make => (
              <option key={make} value={make}>{make}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Model</label>
          <input
            type="text"
            name="model"
            value={searchParams.model}
            onChange={handleChange}
            placeholder="Any Model"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Price Range</label>
          <select
            name="priceRange"
            value={searchParams.priceRange}
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
        <div className="flex flex-col justify-end">
          <button 
            type="submit" 
            className="btn btn-primary w-full flex items-center justify-center"
          >
            <FaSearch className="mr-2" />
            Search
          </button>
          <Link 
            to="/cars" 
            className="text-primary text-sm mt-2 hover:underline flex items-center justify-end"
          >
            Advanced Search <FaAngleRight className="ml-1" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;