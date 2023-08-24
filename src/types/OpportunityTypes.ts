
export interface Opportunity {
  opportunityId: string;
  leadId: string;
  assignedTo: string;
  status: string;
  notes: string;
  documents: string;
}

export interface OpportunityResponse {
  success: boolean;
  errorMessage?: string;
}

export interface OpportunityRequest {
  opportunityId: string;
  leadId: string;
  assignedTo: string;
  status: string;
  notes: string;
  documents: string;
}