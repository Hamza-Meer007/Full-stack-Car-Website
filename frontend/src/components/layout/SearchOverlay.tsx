import { useState, useEffect, useRef } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { cn } from '../../utils/cn'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/cars?search=${encodeURIComponent(searchQuery.trim())}`)
      onClose()
      setSearchQuery('')
    }
  }

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <button 
        className="absolute top-6 right-6 text-white hover:text-primary focus:outline-none"
        onClick={onClose}
      >
        <FaTimes size={30} />
      </button>

      <div className="w-full max-w-3xl px-4">
        <form onSubmit={handleSubmit} className="relative">
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for cars, brands, models..."
            className="w-full py-4 px-6 text-xl bg-transparent border-b-2 border-white text-white placeholder-gray-400 focus:outline-none focus:border-primary"
          />
          <button 
            type="submit"
            className="absolute right-0 top-0 h-full px-6 text-white hover:text-primary focus:outline-none"
          >
            Search
          </button>
        </form>
        <p className="mt-6 text-center text-gray-400">
          Type keywords like "Toyota", "Petrol", "Electric" or any car model
        </p>
      </div>
    </div>
  )
}

export default SearchOverlay
