import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { FaMapMarkerAlt, FaHeart, FaRegHeart, FaExpand, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Car } from '../../types/car'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface FeaturedCarsSliderProps {
  cars: Car[]
}

// Custom arrow components
const PrevArrow = (props: any) => {
  const { onClick } = props
  return (
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors focus:outline-none -ml-5"
      onClick={onClick}
    >
      <FaAngleLeft />
    </button>
  )
}

const NextArrow = (props: any) => {
  const { onClick } = props
  return (
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors focus:outline-none -mr-5"
      onClick={onClick}
    >
      <FaAngleRight />
    </button>
  )
}

const FeaturedCarsSlider = ({ cars }: FeaturedCarsSliderProps) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({})

  const toggleFavorite = (e: React.MouseEvent, carId: string) => {
    e.preventDefault()
    setFavorites(prev => ({
      ...prev,
      [carId]: !prev[carId]
    }))
  }

  const settings = {
    dots: true,
    infinite: cars.length > 3, // Enable infinite scrolling only if more than 3 cars
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  }

  return (
    <div className="relative px-6">
      <Slider {...settings}>
        {cars.map(car => (
          <div key={car.id} className="px-3 py-2">
            <div className="car-box group">
              <div className="car-thumbnail">
                <Link to={`/cars/${car.id}`} className="block relative">
                  {car.status && (
                    <div className="tag">{car.status}</div>
                  )}
                  {car.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 text-xs font-medium text-white bg-green-500 rounded-md">
                      Featured
                    </div>
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
                        onClick={(e) => toggleFavorite(e, car.id)}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      >
                        {favorites[car.id] ? <FaHeart className="text-primary" /> : <FaRegHeart />}
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
                  {car.features && car.features.slice(0, 6).map((feature, index) => (
                    <span key={index} className="car-feature">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default FeaturedCarsSlider
