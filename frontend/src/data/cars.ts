import { Car } from '../types/car'

export const cars: Car[] = [
  {
    id: '1',
    title: 'Toyota Corolla',
    price: 2500000, // ¥2,500,000
    location: 'Shibuya, Tokyo',
    description: 'The Toyota Corolla is a line of subcompact and compact cars manufactured by Toyota. The Corolla has been one of the best-selling cars worldwide since 1974. The name "Corolla" is part of Toyota\'s naming tradition of using names derived from the Toyota Crown for sedans.',
    mainImage: 'img/car/car-1.jpg',
    images: [
      'img/car/car-1.jpg',
      'img/car/car-2.jpg',
      'img/car/car-3.jpg',
      'img/car/car-4.jpg',
      'img/car/car-5.jpg',
    ],
    status: 'For Sale',
    featured: true,
    year: 2022,
    make: 'Toyota',
    model: 'Corolla',
    bodyType: 'Sedan',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    mileage: 5000,
    engine: '1.8L 4-Cylinder',
    color: 'White',
    interiorColor: 'Black',
    doors: 4,
    seats: 5,
    vin: 'JT2BF22K1W0123456',
    features: [
      'Bluetooth',
      'Backup Camera',
      'Keyless Entry',
      'Lane Departure Warning',
      'Adaptive Cruise Control'
    ],
    specifications: {
      'Engine': '1.8L 4-Cylinder',
      'Horsepower': '169 hp',
      'Torque': '151 lb-ft',
      'Fuel Economy': '30 city / 38 hwy',
      'Drivetrain': 'FWD',
      'Transmission': 'CVT Automatic',
      'Seating Capacity': '5',
      'Cargo Space': '13.1 cu ft'
    }
  },
  {
    id: '2',
    title: 'Honda Civic',
    price: 2800000, // ¥2,800,000
    location: 'Shinjuku, Tokyo',
    description: 'The Honda Civic is a line of cars manufactured by Honda. Originally a subcompact, the Civic has gone through several generational changes, becoming both larger and more upscale, moving into the compact car segment.',
    mainImage: 'img/car/car-2.jpg',
    images: [
      'img/car/car-2.jpg',
      'img/car/car-3.jpg',
      'img/car/car-4.jpg',
      'img/car/car-5.jpg',
      'img/car/car-6.jpg',
    ],
    status: 'For Sale',
    year: 2021,
    make: 'Honda',
    model: 'Civic',
    bodyType: 'Sedan',
    fuelType: 'Gasoline',
    transmission: 'CVT',
    mileage: 8000,
    engine: '1.5L Turbo 4-Cylinder',
    color: 'Blue',
    interiorColor: 'Gray',
    doors: 4,
    seats: 5,
    vin: '19XFC2F59NE012345',
    features: [
      'Apple CarPlay',
      'Android Auto',
      'Sunroof',
      'Heated Seats',
      'Blind Spot Monitoring'
    ],
    specifications: {
      'Engine': '1.5L Turbo 4-Cylinder',
      'Horsepower': '180 hp',
      'Torque': '177 lb-ft',
      'Fuel Economy': '32 city / 42 hwy',
      'Drivetrain': 'FWD',
      'Transmission': 'CVT Automatic',
      'Seating Capacity': '5',
      'Cargo Space': '14.8 cu ft'
    }
  },
  {
    id: '3',
    title: 'Nissan Skyline GT-R',
    price: 12000000, // ¥12,000,000
    location: 'Yokohama, Kanagawa',
    description: 'The Nissan Skyline GT-R is a sports car based on the Nissan Skyline range. The first "Skyline GT-R" name was introduced in 1969. The GT-R is an iconic Japanese performance car with a rich racing heritage.',
    mainImage: 'img/car-11.jpg',
    images: [
      'img/car-11.jpg',
      'img/car-12.jpg',
      'img/car-13.jpg',
      'img/car-14.jpg',
      'img/car-15.jpg',
    ],
    status: 'For Sale',
    featured: true,
    year: 2020,
    make: 'Nissan',
    model: 'Skyline GT-R',
    bodyType: 'Coupe',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    mileage: 15000,
    engine: '3.8L Twin-Turbo V6',
    color: 'Silver',
    interiorColor: 'Black',
    doors: 2,
    seats: 4,
    vin: 'JN1AR5EF8LM123456',
    features: [
      'All-Wheel Drive',
      'Brembo Brakes',
      'Leather Seats',
      'Navigation System',
      'Premium Sound System'
    ],
    specifications: {
      'Engine': '3.8L Twin-Turbo V6',
      'Horsepower': '565 hp',
      'Torque': '467 lb-ft',
      'Fuel Economy': '16 city / 22 hwy',
      'Drivetrain': 'AWD',
      'Transmission': '6-Speed Dual-Clutch',
      'Seating Capacity': '4',
      'Cargo Space': '8.8 cu ft'
    }
  },
  {
    id: '4',
    title: 'Mazda CX-5',
    price: 3200000, // ¥3,200,000
    location: 'Osaka, Osaka',
    description: 'The Mazda CX-5 is a compact crossover SUV produced by Mazda. It is known for its stylish design, engaging driving dynamics, and premium interior quality that exceeds expectations for its class.',
    mainImage: 'img/car/car-4.jpg',
    images: [
      'img/car/car-4.jpg',
      'img/car/car-5.jpg',
      'img/car/car-6.jpg',
      'img/car/car-7.jpg',
      'img/car/car-8.jpg',
    ],
    status: 'For Sale',
    year: 2022,
    make: 'Mazda',
    model: 'CX-5',
    bodyType: 'SUV',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    mileage: 7500,
    engine: '2.5L 4-Cylinder',
    color: 'Red',
    interiorColor: 'Black',
    doors: 5,
    seats: 5,
    vin: 'JM3KE4DY8N0123456',
    features: [
      'Bose Sound System',
      'Power Liftgate',
      'Heated Steering Wheel',
      'Leather Seats',
      'Adaptive Front Lighting'
    ],
    specifications: {
      'Engine': '2.5L 4-Cylinder',
      'Horsepower': '187 hp',
      'Torque': '186 lb-ft',
      'Fuel Economy': '24 city / 30 hwy',
      'Drivetrain': 'AWD',
      'Transmission': '6-Speed Automatic',
      'Seating Capacity': '5',
      'Cargo Space': '30.9 cu ft'
    }
  },
  {
    id: '5',
    title: 'Subaru Impreza WRX STI',
    price: 4500000, // ¥4,500,000
    location: 'Sapporo, Hokkaido',
    description: 'The Subaru Impreza WRX STI is a high-performance variant of the Subaru Impreza, known for its rally heritage, all-wheel drive system, and turbocharged boxer engine. It offers exceptional handling and performance in all weather conditions.',
    mainImage: 'img/car/car-5.jpg',
    images: [
      'img/car/car-5.jpg',
      'img/car/car-6.jpg',
      'img/car/car-7.jpg',
      'img/car/car-8.jpg',
      'img/car/car-1.jpg',
    ],
    status: 'For Rent',
    year: 2019,
    make: 'Subaru',
    model: 'Impreza WRX STI',
    bodyType: 'Sedan',
    fuelType: 'Gasoline',
    transmission: 'Manual',
    mileage: 25000,
    engine: '2.5L Turbo 4-Cylinder',
    color: 'Blue',
    interiorColor: 'Black',
    doors: 4,
    seats: 5,
    vin: 'JF1VA2L69K9123456',
    features: [
      'All-Wheel Drive',
      'Brembo Brakes',
      'Sport-tuned Suspension',
      'Recaro Seats',
      'Limited Slip Differential'
    ],
    specifications: {
      'Engine': '2.5L Turbo 4-Cylinder',
      'Horsepower': '310 hp',
      'Torque': '290 lb-ft',
      'Fuel Economy': '16 city / 22 hwy',
      'Drivetrain': 'AWD',
      'Transmission': '6-Speed Manual',
      'Seating Capacity': '5',
      'Cargo Space': '12.0 cu ft'
    }
  },
  {
    id: '6',
    title: 'Toyota Prius',
    price: 2900000, // ¥2,900,000
    location: 'Nagoya, Aichi',
    description: 'The Toyota Prius is a full hybrid electric automobile developed by Toyota. It is known for its exceptional fuel efficiency and low emissions, making it a popular choice for environmentally conscious drivers.',
    mainImage: 'img/car/car-6.jpg',
    images: [
      'img/car/car-6.jpg',
      'img/car/car-7.jpg',
      'img/car/car-8.jpg',
      'img/car/car-1.jpg',
      'img/car/car-2.jpg',
    ],
    status: 'For Sale',
    year: 2021,
    make: 'Toyota',
    model: 'Prius',
    bodyType: 'Hatchback',
    fuelType: 'Hybrid',
    transmission: 'CVT',
    mileage: 10000,
    engine: '1.8L 4-Cylinder Hybrid',
    color: 'Green',
    interiorColor: 'Gray',
    doors: 5,
    seats: 5,
    vin: 'JTDKN3DU7M3123456',
    features: [
      'Toyota Safety Sense',
      'Smart Key System',
      'Qi Wireless Charging',
      'Head-Up Display',
      'JBL Premium Audio'
    ],
    specifications: {
      'Engine': '1.8L 4-Cylinder Hybrid',
      'Horsepower': '121 hp (combined)',
      'Torque': '105 lb-ft',
      'Fuel Economy': '54 city / 50 hwy',
      'Drivetrain': 'FWD',
      'Transmission': 'CVT Automatic',
      'Seating Capacity': '5',
      'Cargo Space': '27.4 cu ft'
    }
  },
  {
    id: '7',
    title: 'Lexus LS 500',
    price: 12500000, // ¥12,500,000
    location: 'Kyoto, Kyoto',
    description: 'The Lexus LS is a full-size luxury sedan serving as the flagship model of Lexus, the luxury division of Toyota. It offers exceptional comfort, advanced technology, and meticulous craftsmanship.',
    mainImage: 'img/car-7.jpg',
    images: [
      'img/car/car-7.jpg',
      'img/car/car-8.jpg',
      'img/car/car-1.jpg',
      'img/car/car-2.jpg',
      'img/car/car-3.jpg',
    ],
    status: 'For Sale',
    featured: true,
    year: 2022,
    make: 'Lexus',
    model: 'LS 500',
    bodyType: 'Sedan',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    mileage: 3000,
    engine: '3.5L Twin-Turbo V6',
    color: 'Black',
    interiorColor: 'Cream',
    doors: 4,
    seats: 5,
    vin: 'JTHCM1D28N0123456',
    features: [
      'Mark Levinson Audio',
      'Panoramic Roof',
      'Massage Seats',
      'Adaptive Variable Suspension',
      'Lexus Safety System+'
    ],
    specifications: {
      'Engine': '3.5L Twin-Turbo V6',
      'Horsepower': '416 hp',
      'Torque': '442 lb-ft',
      'Fuel Economy': '17 city / 27 hwy',
      'Drivetrain': 'RWD',
      'Transmission': '10-Speed Automatic',
      'Seating Capacity': '5',
      'Cargo Space': '17.0 cu ft'
    }
  },
  {
    id: '8',
    title: 'Honda N-Box',
    price: 1800000, // ¥1,800,000
    location: 'Fukuoka, Fukuoka',
    description: 'The Honda N-Box is a kei car produced by Honda. It is designed to maximize interior space while maintaining the small exterior dimensions required for kei car classification in Japan.',
    mainImage: 'img/car-14.jpg',
    images: [
      'img/car-12.jpg',
      'img/car-1.jpg',
      'img/car-2.jpg',
      'img/car-3.jpg',
      'img/car-4.jpg',
    ],
    status: 'For Rent',
    year: 2021,
    make: 'Honda',
    model: 'N-Box',
    bodyType: 'Kei Car',
    fuelType: 'Gasoline',
    transmission: 'CVT',
    mileage: 5000,
    engine: '660cc 3-Cylinder',
    color: 'Silver',
    interiorColor: 'Beige',
    doors: 5,
    seats: 4,
    vin: 'JH1JF1A59MT123456',
    features: [
      'Honda Sensing',
      'Sliding Doors',
      'Adjustable Rear Seats',
      'Keyless Entry',
      'Backup Camera'
    ],
    specifications: {
      'Engine': '660cc 3-Cylinder',
      'Horsepower': '58 hp',
      'Torque': '65 lb-ft',
      'Fuel Economy': '25 km/L (combined)',
      'Drivetrain': 'FWD',
      'Transmission': 'CVT Automatic',
      'Seating Capacity': '4',
      'Cargo Space': 'Variable'
    }
  }
]

export const getFeaturedCars = () => {
  return cars.filter(car => car.featured)
}

export const getCarById = (id: string) => {
  return cars.find(car => car.id === id)
}

export const getRelatedCars = (id: string, limit = 4) => {
  const car = getCarById(id)
  if (!car) return []

  return cars
    .filter(c => c.id !== id && (c.make === car.make || c.bodyType === car.bodyType))
    .slice(0, limit)
}

export const filterCars = (filters: any) => {
  return cars.filter(car => {
    // Filter by make
    if (filters.make && car.make !== filters.make) return false

    // Filter by model (partial match)
    if (filters.model && !car.model.toLowerCase().includes(filters.model.toLowerCase())) return false

    // Filter by price range
    if (filters.minPrice && car.price < parseInt(filters.minPrice)) return false
    if (filters.maxPrice && car.price > parseInt(filters.maxPrice)) return false

    // Filter by year range
    if (filters.minYear && car.year < parseInt(filters.minYear)) return false
    if (filters.maxYear && car.year > parseInt(filters.maxYear)) return false

    // Filter by body type
    if (filters.bodyType && car.bodyType !== filters.bodyType) return false

    // Filter by fuel type
    if (filters.fuelType && car.fuelType !== filters.fuelType) return false

    // Filter by transmission
    if (filters.transmission && car.transmission !== filters.transmission) return false

    return true
  })
}
