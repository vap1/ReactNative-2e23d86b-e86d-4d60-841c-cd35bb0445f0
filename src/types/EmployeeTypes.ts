
export interface Employee {
  employeeId: string;
  name: string;
  contactInfo: string;
  role: string;
  permissions: string;
}

export interface EmployeeResponse {
  success: boolean;
  errorMessage?: string;
}

export interface EmployeeRequest {
  employeeId: string;
  name: string;
  contactInfo: string;
  role: string;
  permissions: string;
}