
export interface Lead {
  leadId: string;
  contactDetails: string;
  relevantInfo: string;
  assignedTo: string;
  status: string;
}

export interface LeadCreationRequest {
  contactDetails: string;
  relevantInfo: string;
}

export interface LeadUpdateRequest {
  leadId: string;
  contactDetails?: string;
  relevantInfo?: string;
  assignedTo?: string;
  status?: string;
}

export interface LeadResponse {
  success: boolean;
  errorMessage?: string;
}

export interface LeadListResponse {
  leads: Lead[];
}

export interface LeadAssignmentRequest {
  leadId: string;
  assignedTo: string;
}

export interface LeadAssignmentResponse {
  success: boolean;
  errorMessage?: string;
}