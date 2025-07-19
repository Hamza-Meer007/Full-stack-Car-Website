import axios from 'axios';
import { Car } from '../types/car';

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: 'http://localhost:8000/api/v2', // Updated to match backend
});

// Also define this constant for consistency
const API_BASE_URL = 'http://localhost:8000/api/v2';

export const fetchCars = async (country?: string, make?: string, model?: string): Promise<any[]> => {
  try {
    // Build query parameters
    const params: any = {};
    if (country) params.country = country;
    if (make) params.make = make;
    if (model) params.model = model;
    
    // Make API request with parameters
    const response = await api.get('/cars/', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    return [];
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
    const response = await api.get('/cars/?is_featured=true');
    console.log('Featured cars data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching featured cars:', error);
    throw error;
  }
};

export const fetchCountryStocks = async () => {
  try {
    const response = await api.get('/country-stocks/');
    console.log('Countries fetched:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    // Return fallback data
    return [
      { code: 'jp', name: 'Japan', count: 0 },
      { code: 'mm', name: 'Myanmar', count: 0 },
      { code: 'gb', name: 'United Kingdom', count: 0 },
      { code: 'jm', name: 'Jamaica', count: 0 },
      { code: 'tt', name: 'Trinidad and Tobago', count: 0 },
      { code: 'au', name: 'Australia', count: 0 },
      { code: 'mu', name: 'Mauritius', count: 0 },
      { code: 'gy', name: 'Guyana', count: 0 },
      { code: 'tz', name: 'Tanzania', count: 0 },
      { code: 'ie', name: 'Ireland', count: 0 },
      { code: 'ke', name: 'Kenya', count: 0 },
      { code: 'zm', name: 'Zambia', count: 0 },
      { code: 'nz', name: 'New Zealand', count: 0 }
    ];
  }
};

// Function to fetch car makes from backend
export const fetchCarMakes = async (): Promise<string[]> => {
  try {
    const response = await api.get('/car-makes/');
    return response.data;
  } catch (error) {
    console.error('Error fetching car makes:', error);
    // Fallback to common makes if API fails
    return ['Toyota', 'Honda', 'Nissan', 'Mazda', 'Subaru', 'Mitsubishi'];
  }
};

// Function to fetch fuel types from backend
export const fetchFuelTypes = async (): Promise<string[]> => {
  try {
    const response = await api.get('/fuel-types/');
    return response.data;
  } catch (error) {
    console.error('Error fetching fuel types:', error);
    // Fallback to common fuel types
    return ['Petrol', 'Diesel', 'Hybrid', 'Electric', 'LPG'];
  }
};

// Function to fetch transmissions from backend
export const fetchTransmissions = async (): Promise<string[]> => {
  try {
    const response = await api.get('/transmissions/');
    return response.data;
  } catch (error) {
    console.error('Error fetching transmissions:', error);
    // Fallback to common transmissions
    return ['Automatic', 'Manual', 'CVT', 'Semi-Automatic'];
  }
};

export { api };