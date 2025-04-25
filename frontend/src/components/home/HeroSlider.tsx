import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface SlideProps {
  image: string
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
}

const slides: SlideProps[] = [
  {
    image: 'img/car-1.jpg',
    title: 'Wow Factor Standard',
    subtitle: 'Allow us to guide you through the innovative stress free approach in finding your dream car.',
    buttonText: 'Read more',
    buttonLink: '/services'
  },
  {
    image: 'img/car-2.jpg',
    title: 'Explore Your Dream Car',
    subtitle: 'Allow us to guide you through the innovative stress free approach in finding your dream car.',
    buttonText: 'Read more',
    buttonLink: '/cars'
  },
  {
    image: 'img/car-3.jpg',
    title: 'We Are Wheel',
    subtitle: 'Allow us to guide you through the innovative stress free approach in finding your dream car.',
    buttonText: 'Read more',
    buttonLink: '/about'
  }
]

// Custom arrow components
const PrevArrow = (props: any) => {
  const { onClick } = props
  return (
    <button
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white bg-opacity-50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors focus:outline-none"
      onClick={onClick}
    >
      <FaAngleLeft className="text-2xl" />
    </button>
  )
}

const NextArrow = (props: any) => {
  const { onClick } = props
  return (
    <button
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white bg-opacity-50 flex items-center justify-center hover:bg-primary hover:text-white transition-colors focus:outline-none"
      onClick={onClick}
    >
      <FaAngleRight className="text-2xl" />
    </button>
  )
}

const HeroSlider = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  }

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[600px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="container relative z-10 h-full flex flex-col justify-center">
              <div className="max-w-2xl text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-white mb-8">
                  {slide.subtitle}
                </p>
                <Link to={slide.buttonLink} className="btn btn-primary">
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      
    </div>
  )
}

export default HeroSlider
