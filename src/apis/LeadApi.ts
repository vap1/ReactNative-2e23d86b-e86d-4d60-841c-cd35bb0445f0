
import axios from 'axios';
import { Lead, LeadResponse, LeadRequest } from '../types/LeadTypes';

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const addLead = async (request: LeadRequest): Promise<LeadResponse> => {
  try {
    const response = await axios.post<LeadResponse>(`${BASE_URL}/leads`, request);
    return response.data;
  } catch (error) {
    console.error('Error adding lead:', error);
    throw error;
  }
};

export const updateLead = async (leadId: string, request: LeadRequest): Promise<LeadResponse> => {
  try {
    const response = await axios.put<LeadResponse>(`${BASE_URL}/leads/${leadId}`, request);
    return response.data;
  } catch (error) {
    console.error('Error updating lead:', error);
    throw error;
  }
};