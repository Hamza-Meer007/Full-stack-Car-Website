import { Car } from '../types/car';

/**
 * Adapts the car data from the backend format to the frontend format
 * @param car The car data from the backend
 * @returns The car data in the frontend format
 */
export const adaptCarFromBackend = (car: Car): Car => {
  console.log('Adapting car:', car);
  // Create the base URL for images
  const baseUrl = 'http://localhost:8000';

  console.log('Car ID:', car.id);

  // Create the image URL
  // First try to use the image_url field provided by the backend
  // If not available, try to construct it from the image field
  // If neither is available, use a default image
  let imageUrl = 'img/car/car-1.jpg'; // Default fallback image

  if (car.image_url) {
    // Use the full URL provided by the backend
    imageUrl = car.image_url;
    console.log('Using image_url:', imageUrl);
  } else if (car.image) {
    // Check if the image path already includes the domain
    if (car.image.startsWith('http')) {
      imageUrl = car.image;
    } else {
      // Make sure the path starts with a slash
      const imagePath = car.image.startsWith('/') ? car.image : `/${car.image}`;
      imageUrl = `${baseUrl}${imagePath}`;
    }
    console.log('Constructed image URL:', imageUrl);
  } else {
    console.log('Using default image');
  }

  // Process all images from the car.images array
  let allImages: string[] = [];
  
  // Add main image first
  if (imageUrl) {
    allImages.push(imageUrl);
  }
  
  // Add all additional images from the car.images array
  if (car.images && Array.isArray(car.images)) {
    console.log('Car has additional images:', car.images.length);
    
    // Extract URLs based on the structure of each image object
    const additionalImages = car.images.map((img: any) => {
      // If image is already a string URL
      if (typeof img === 'string') {
        return img;
      }
      
      // If image has image_url property
      if (img.image_url) {
        return img.image_url;
      }
      
      // If image has image property
      if (img.image) {
        if (img.image.startsWith('http')) {
          return img.image;
        } else {
          const imgPath = img.image.startsWith('/') ? img.image : `/${img.image}`;
          return `${baseUrl}${imgPath}`;
        }
      }
      
      return null;
    }).filter(Boolean); // Remove any null values
    
    // Add additional images to allImages array, avoiding duplicates
    additionalImages.forEach(url => {
      if (!allImages.includes(url)) {
        allImages.push(url);
      }
    });
  }
  
  console.log('Final images array:', allImages);
  // Create a status based on is_sold
  const status = car.is_sold ? 'Sold' : 'For Sale';

  // Create specifications object from available data
  const specifications: { [key: string]: string } = {
    'Engine': car.engine_size ? `${car.engine_size}L` : 'N/A',
    'Horsepower': car.power ? `${car.power} hp` : 'N/A',
    'Transmission': car.transmission || 'N/A',
    'Drive Type': car.drive_type || 'N/A',
    'Fuel Type': car.fuel_type || 'N/A',
    'Mileage': `${car.milage} km`,
    'Doors': `${car.doors}`,
    'Seats': `${car.seats}`,
    'Color': car.color || 'N/A',
    'Condition': car.condition || 'N/A',
    'Year': car.year ? `${car.year}` : 'N/A',
  };

  // Create a list of features (this is a placeholder as the backend doesn't have features)
  const features = [
    car.has_warranty ? 'Warranty' : '',
    car.steering === 'right' ? 'Right-Hand Drive' : 'Left-Hand Drive',
    car.is_imported ? 'Imported' : 'Domestic',
  ].filter(Boolean); // Remove empty strings

  // Return the adapted car
  return {
    ...car,
    mainImage: imageUrl,
    images: allImages,
    status,
    featured: car.is_featured,
    mileage: car.milage,
    fuelType: car.fuel_type,
    specifications,
    features,
  };
};
