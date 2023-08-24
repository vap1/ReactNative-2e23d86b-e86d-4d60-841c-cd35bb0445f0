
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
  task: Task;
}

export interface TaskUpdateRequest {
  taskId: string;
  updatedTask: Task;
}