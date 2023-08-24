
import axios from 'axios';
import { Employee, EmployeeResponse, EmployeeRequest } from '../types/EmployeeTypes';

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const addEmployee = async (request: EmployeeRequest): Promise<EmployeeResponse> => {
  try {
    const response = await axios.post<EmployeeResponse>(`${BASE_URL}/employees`, request);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.errorMessage || 'An error occurred');
  }
};

export const updateEmployee = async (employeeId: string, request: EmployeeRequest): Promise<EmployeeResponse> => {
  try {
    const response = await axios.put<EmployeeResponse>(`${BASE_URL}/employees/${employeeId}`, request);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.errorMessage || 'An error occurred');
  }
};

export const deleteEmployee = async (employeeId: string): Promise<EmployeeResponse> => {
  try {
    const response = await axios.delete<EmployeeResponse>(`${BASE_URL}/employees/${employeeId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.errorMessage || 'An error occurred');
  }
};