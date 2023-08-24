
import axios from 'axios';
import { Task, TaskResponse, TaskRequest } from '../types/TaskTypes';

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const createTask = async (request: TaskRequest): Promise<TaskResponse> => {
  try {
    const response = await axios.post<TaskResponse>(`${BASE_URL}/tasks`, request);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.errorMessage || 'An error occurred');
  }
};

export const updateTask = async (taskId: string, request: TaskRequest): Promise<TaskResponse> => {
  try {
    const response = await axios.put<TaskResponse>(`${BASE_URL}/tasks/${taskId}`, request);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.errorMessage || 'An error occurred');
  }
};