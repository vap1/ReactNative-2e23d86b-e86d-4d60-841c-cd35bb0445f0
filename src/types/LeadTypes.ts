
export interface Lead {
  leadId: string;
  contactDetails: string;
  relevantInfo: string;
  assignedTo: string;
  status: string;
}

export interface LeadResponse {
  success: boolean;
  errorMessage?: string;
}

export interface LeadRequest {
  lead: Lead;
}

export interface LeadUpdateRequest {
  leadId: string;
  updatedLead: Lead;
}