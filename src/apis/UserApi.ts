
import axios from 'axios';
import { UserRegistrationRequest, UserRegistrationResponse } from '../types/UserTypes';

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const registerUser = async (request: UserRegistrationRequest): Promise<UserRegistrationResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, request);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};