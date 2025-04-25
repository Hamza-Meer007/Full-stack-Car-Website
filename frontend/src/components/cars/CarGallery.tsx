import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa'

interface CarGalleryProps {
  images: string[]
  title: string
}

const CarGallery = ({ images, title }: CarGalleryProps) => {
  // If no images are provided, use a default image
  const imageList = images && images.length > 0 && images[0] !== ''
    ? images
    : ['img/car/car-1.jpg']

  console.log('CarGallery images:', images)
  console.log('CarGallery imageList:', imageList)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    )
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const nextLightboxSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLightboxIndex((prevIndex) =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevLightboxSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLightboxIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={imageList[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="w-full h-96 object-cover"
        />

        {/* Expand Button */}
        <button
          onClick={() => openLightbox(currentIndex)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
        >
          <FaExpand />
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-5 gap-2">
        {imageList.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer rounded-md overflow-hidden border-2 ${
              index === currentIndex ? 'border-primary' : 'border-transparent'
            }`}
          >
            <img
              src={image}
              alt={`${title} - Thumbnail ${index + 1}`}
              className="w-full h-20 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-primary focus:outline-none"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>

          <div className="relative max-w-6xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={imageList[lightboxIndex]}
              alt={`${title} - Lightbox Image ${lightboxIndex + 1}`}
              className="max-w-full max-h-[80vh] mx-auto"
            />

            <button
              onClick={prevLightboxSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={nextLightboxSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <FaChevronRight size={20} />
            </button>

            <div className="text-center text-white mt-4">
              {lightboxIndex + 1} / {imageList.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CarGallery
