
import axios from 'axios';
import { Task, TaskResponse, TaskRequest, TaskUpdateRequest } from '../types/TaskTypes';

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const addTask = async (request: TaskRequest): Promise<TaskResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}/tasks`, request);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

export const updateTask = async (taskId: string, updatedTask: Task): Promise<TaskResponse> => {
  try {
    const response = await axios.put(`${BASE_URL}/tasks/${taskId}`, { updatedTask });
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

export const deleteTask = async (taskId: string): Promise<TaskResponse> => {
  try {
    const response = await axios.delete(`${BASE_URL}/tasks/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};