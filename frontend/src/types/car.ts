// Interface for car data from the backend
export interface Car {
  id: number | string
  title: string
  make?: string
  model?: string
  year?: number
  description: string
  image?: string // Backend field for car image
  image_url?: string // Full URL to the image provided by the backend
  milage: number // Note: Backend uses 'milage' instead of 'mileage'
  fuel_type: string
  country?: string // Country where the car is available
  transmission: string
  engine_size?: number
  power?: number
  doors: number
  seats: number
  drive_type?: string
  steering?: string
  condition?: string
  color?: string
  is_imported?: boolean
  has_warranty?: boolean
  number_of_owners?: number
  price?: number
  is_negotiable?: boolean
  is_featured?: boolean
  date_added?: string
  is_sold?: boolean
  location?: string

  // Frontend-specific fields for compatibility
  mainImage?: string // Will be mapped from image
  images?: string[] // Will be populated with image
  status?: string // Will be determined from is_sold
  featured?: boolean // Will be mapped from is_featured
  mileage?: number // Will be mapped from milage
  fuelType?: string // Will be mapped from fuel_type
  bodyType?: string
  engine?: string
  interiorColor?: string
  vin?: string
  features?: string[]
  specifications?: {
    [key: string]: string
  }
}
