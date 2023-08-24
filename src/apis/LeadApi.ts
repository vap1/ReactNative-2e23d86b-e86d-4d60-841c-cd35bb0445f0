
import axios from 'axios';
import { Lead, LeadResponse, LeadRequest, LeadUpdateRequest } from '../types/LeadTypes';

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const addLead = async (request: LeadRequest): Promise<LeadResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}/leads`, request);
    return response.data;
  } catch (error) {
    console.error('Error adding lead:', error);
    throw error;
  }
};

export const updateLead = async (leadId: string, updatedLead: Lead): Promise<LeadResponse> => {
  try {
    const response = await axios.put(`${BASE_URL}/leads/${leadId}`, { updatedLead });
    return response.data;
  } catch (error) {
    console.error('Error updating lead:', error);
    throw error;
  }
};

export const deleteLead = async (leadId: string): Promise<LeadResponse> => {
  try {
    const response = await axios.delete(`${BASE_URL}/leads/${leadId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting lead:', error);
    throw error;
  }
};