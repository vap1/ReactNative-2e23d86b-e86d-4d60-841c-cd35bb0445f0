
import axios from 'axios';
import { Opportunity, OpportunityResponse, OpportunityRequest, OpportunityUpdateRequest } from '../types/OpportunityTypes';

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const addOpportunity = async (request: OpportunityRequest): Promise<OpportunityResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}/opportunities`, request);
    return response.data;
  } catch (error) {
    console.error('Error adding opportunity:', error);
    throw error;
  }
};

export const updateOpportunity = async (opportunityId: string, updatedOpportunity: Opportunity): Promise<OpportunityResponse> => {
  try {
    const response = await axios.put(`${BASE_URL}/opportunities/${opportunityId}`, { updatedOpportunity });
    return response.data;
  } catch (error) {
    console.error('Error updating opportunity:', error);
    throw error;
  }
};

export const deleteOpportunity = async (opportunityId: string): Promise<OpportunityResponse> => {
  try {
    const response = await axios.delete(`${BASE_URL}/opportunities/${opportunityId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting opportunity:', error);
    throw error;
  }
};