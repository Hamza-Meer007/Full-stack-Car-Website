import { useState, useEffect } from 'react'
import { FaCar, FaHeart, FaComments, FaCalendarAlt, FaChartLine } from 'react-icons/fa'
import { cars } from '../data/cars'

const Dashboard = () => {
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalCars: 0,
    favoriteCars: 0,
    messages: 0,
    appointments: 0
  })

  useEffect(() => {
    // Simulate loading data
    setLoading(true)
    
    setTimeout(() => {
      setStats({
        totalCars: cars.length,
        favoriteCars: 3,
        messages: 5,
        appointments: 2
      })
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary"></div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
              <FaCar className="text-primary text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Total Cars</h3>
              <p className="text-3xl font-bold">{stats.totalCars}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
              <FaHeart className="text-red-500 text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Favorites</h3>
              <p className="text-3xl font-bold">{stats.favoriteCars}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <FaComments className="text-blue-500 text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Messages</h3>
              <p className="text-3xl font-bold">{stats.messages}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <FaCalendarAlt className="text-green-500 text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Appointments</h3>
              <p className="text-3xl font-bold">{stats.appointments}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Recent Activity</h2>
          <button className="text-primary hover:underline">View All</button>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start p-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
              <FaHeart className="text-primary" />
            </div>
            <div>
              <p className="font-medium">You added Toyota Corolla to your favorites</p>
              <p className="text-sm text-gray-500">2 days ago</p>
            </div>
          </div>
          
          <div className="flex items-start p-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <FaComments className="text-blue-500" />
            </div>
            <div>
              <p className="font-medium">New message from Japan Auto Exchange Support</p>
              <p className="text-sm text-gray-500">3 days ago</p>
            </div>
          </div>
          
          <div className="flex items-start p-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <FaCalendarAlt className="text-green-500" />
            </div>
            <div>
              <p className="font-medium">Test drive scheduled for Nissan Skyline GT-R</p>
              <p className="text-sm text-gray-500">5 days ago</p>
            </div>
          </div>
          
          <div className="flex items-start p-4">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
              <FaCar className="text-yellow-500" />
            </div>
            <div>
              <p className="font-medium">You viewed Honda Civic details</p>
              <p className="text-sm text-gray-500">1 week ago</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Favorite Cars */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Favorite Cars</h2>
          <button className="text-primary hover:underline">View All</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Car</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Added On</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cars.slice(0, 3).map((car) => (
                <tr key={car.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded-md object-cover" src={car.mainImage} alt={car.title} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{car.title}</div>
                        <div className="text-sm text-gray-500">{car.year} • {car.mileage.toLocaleString()} km</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">¥{car.price.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {car.status || 'Available'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date().toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href={`/cars/${car.id}`} className="text-primary hover:underline mr-4">View</a>
                    <button className="text-red-500 hover:underline">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
