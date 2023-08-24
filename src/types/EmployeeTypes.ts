
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
  employee: Employee;
}

export interface EmployeeUpdateRequest {
  employeeId: string;
  updatedEmployee: Employee;
}