
export interface Task {
  taskId: string;
  assignedTo: string;
  status: string;
  comments: string;
}

export interface TaskResponse {
  success: boolean;
  errorMessage?: string;
}

export interface TaskRequest {
  taskId: string;
  assignedTo: string;
  status: string;
  comments: string;
}