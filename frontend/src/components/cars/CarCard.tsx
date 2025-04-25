import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaHeart, FaRegHeart, FaExpand } from 'react-icons/fa'
import { Car } from '../../types/car'

interface CarCardProps {
  car: Car
}

const CarCard = ({ car }: CarCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="car-box group">
      <div className="car-thumbnail">
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
            className="w-full h-60 object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-3">
              <button
                onClick={toggleFavorite}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                {isFavorite ? <FaHeart className="text-primary" /> : <FaRegHeart />}
              </button>
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

      <div className="car-detail p-4">
        <h3 className="car-title">
          <Link to={`/cars/${car.id}`} className="hover:text-primary transition-colors">
            {car.title}
          </Link>
        </h3>

        <div className="car-location">
          <FaMapMarkerAlt className="mr-1 text-primary" />
          <span>{car.location}</span>
        </div>

        <div className="car-features mt-3 flex flex-wrap gap-2">
          {car.features && car.features.map((feature, index) => (
            <span key={index} className="car-feature">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CarCard
