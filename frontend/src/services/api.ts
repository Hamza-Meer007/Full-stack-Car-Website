import axios from 'axios';
import { Car } from '../types/car';

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: 'http://localhost:8000/api/v2', // Django backend URL
});

// Function to fetch all cars
export const fetchCars = async (): Promise<Car[]> => {
  try {
    const response = await api.get('/cars/');
    console.log('Cars data from API:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};

// Function to fetch a single car by ID
export const fetchCarById = async (id: string): Promise<Car> => {
  try {
    const response = await api.get(`/cars/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching car with ID ${id}:`, error);
    throw error;
  }
};

// Function to fetch featured cars
export const fetchFeaturedCars = async (): Promise<Car[]> => {
  try {
    const response = await api.get('/cars/');
    // Filter featured cars on the client side since the backend doesn't have a specific endpoint for featured cars
    return response.data.filter((car: Car) => car.is_featured);
  } catch (error) {
    console.error('Error fetching featured cars:', error);
    throw error;
  }
};
