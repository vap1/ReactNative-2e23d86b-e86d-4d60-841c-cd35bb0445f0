
import axios from 'axios';
import { Employee, EmployeeResponse, EmployeeRequest, EmployeeUpdateRequest } from '../types/EmployeeTypes';

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const addEmployee = async (request: EmployeeRequest): Promise<EmployeeResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}/employees`, request);
    return response.data;
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
};

export const updateEmployee = async (employeeId: string, updatedEmployee: Employee): Promise<EmployeeResponse> => {
  try {
    const response = await axios.put(`${BASE_URL}/employees/${employeeId}`, { updatedEmployee });
    return response.data;
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
};

export const deleteEmployee = async (employeeId: string): Promise<EmployeeResponse> => {
  try {
    const response = await axios.delete(`${BASE_URL}/employees/${employeeId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
};