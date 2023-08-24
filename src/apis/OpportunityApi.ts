
import axios from 'axios';
import { Opportunity, OpportunityResponse, OpportunityRequest } from '../types/OpportunityTypes';

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const createOpportunity = async (request: OpportunityRequest): Promise<OpportunityResponse> => {
  try {
    const response = await axios.post<OpportunityResponse>(`${BASE_URL}/opportunities`, request);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.errorMessage || 'An error occurred');
  }
};

export const updateOpportunity = async (opportunityId: string, request: OpportunityRequest): Promise<OpportunityResponse> => {
  try {
    const response = await axios.put<OpportunityResponse>(`${BASE_URL}/opportunities/${opportunityId}`, request);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.errorMessage || 'An error occurred');
  }
};