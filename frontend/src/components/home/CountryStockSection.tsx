import { useState, useEffect } from 'react';
import { fetchCountryStocks } from '../../services/api';

interface Country {
  id?: number;
  name: string;
  code: string;
  flag_image?: string;
  count?: number;
}

const CountryStockSection = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountryStocks();
        console.log('Countries data:', data);
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    };

    getCountries();
  }, []);

  // Function to get flag colors for countries
  const getFlagColors = (countryCode: string) => {
    const flagColors: { [key: string]: { bg: string; border: string; text: string } } = {
      'mm': { bg: 'bg-yellow-400', border: 'border-red-500', text: 'MM' },
      'gb': { bg: 'bg-blue-600', border: 'border-red-500', text: 'GB' },
      'jm': { bg: 'bg-green-500', border: 'border-yellow-400', text: 'JM' },
      'tt': { bg: 'bg-red-600', border: 'border-white', text: 'TT' },
      'au': { bg: 'bg-blue-700', border: 'border-red-500', text: 'AU' },
      'mu': { bg: 'bg-red-500', border: 'border-blue-600', text: 'MU' },
      'gy': { bg: 'bg-green-600', border: 'border-yellow-400', text: 'GY' },
      'tz': { bg: 'bg-blue-500', border: 'border-green-500', text: 'TZ' },
      'ie': { bg: 'bg-green-600', border: 'border-orange-500', text: 'IE' },
      'ke': { bg: 'bg-red-600', border: 'border-green-600', text: 'KE' },
      'zm': { bg: 'bg-green-600', border: 'border-orange-500', text: 'ZM' },
      'nz': { bg: 'bg-blue-700', border: 'border-red-500', text: 'NZ' },
      'jp': { bg: 'bg-red-600', border: 'border-white', text: 'JP' }
    };
    return flagColors[countryCode.toLowerCase()] || { bg: 'bg-gray-400', border: 'border-gray-500', text: countryCode.toUpperCase() };
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container">
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading countries...</p>
          </div>
        </div>
      </section>
    );
  }

  // If no API data yet, use placeholder data with proper country names
  const displayCountries = countries.length > 0 ? countries : [
    { id: 1, name: 'Myanmar', code: 'mm', count: 1 },
    { id: 2, name: 'United Kingdom', code: 'gb', count: 1 },
    { id: 3, name: 'Jamaica', code: 'jm', count: 1 },
    { id: 4, name: 'Trinidad and Tobago', code: 'tt', count: 1 },
    { id: 5, name: 'Australia', code: 'au', count: 1 },
    { id: 6, name: 'Mauritius', code: 'mu', count: 1 },
    { id: 7, name: 'Guyana', code: 'gy', count: 1 },
    { id: 8, name: 'Tanzania', code: 'tz', count: 1 },
    { id: 9, name: 'Ireland', code: 'ie', count: 1 },
    { id: 10, name: 'Kenya', code: 'ke', count: 1 },
    { id: 11, name: 'Zambia', code: 'zm', count: 1 },
    { id: 12, name: 'New Zealand', code: 'nz', count: 1 },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Stock for your country</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We export quality vehicles to these countries with reliable shipping options
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {displayCountries.map((country, index) => {
              const flagStyle = getFlagColors(country.code);
              return (
                <a 
                  href={`/cars?country=${country.code}`}
                  key={country.id || index}
                  className="flex items-center space-x-3 hover:bg-gray-50 p-3 rounded-lg transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-6 flex items-center justify-center ${flagStyle.bg} ${flagStyle.border} border-2 rounded-sm shadow-sm`}>
                      <span className="text-xs font-bold text-white">
                        {flagStyle.text}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors truncate block">
                      {country.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {country.count || 1} cars
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryStockSection;