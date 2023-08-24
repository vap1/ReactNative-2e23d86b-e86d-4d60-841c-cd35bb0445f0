
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { OpportunityRequest } from '../types/OpportunityTypes';
import { createOpportunity } from '../apis/OpportunityApi';

interface OpportunityFormProps {
  onSubmit: () => void;
}

const OpportunityForm: React.FC<OpportunityFormProps> = ({ onSubmit }) => {
  const [leadId, setLeadId] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');
  const [documents, setDocuments] = useState('');

  const handleLeadIdChange = (text: string) => {
    setLeadId(text);
  };

  const handleAssignedToChange = (text: string) => {
    setAssignedTo(text);
  };

  const handleStatusChange = (text: string) => {
    setStatus(text);
  };

  const handleNotesChange = (text: string) => {
    setNotes(text);
  };

  const handleDocumentsChange = (text: string) => {
    setDocuments(text);
  };

  const handleSubmit = async () => {
    const opportunityRequest: OpportunityRequest = {
      leadId,
      assignedTo,
      status,
      notes,
      documents,
    };

    try {
      await createOpportunity(opportunityRequest);
      onSubmit();
    } catch (error) {
      console.error('Error creating opportunity:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Lead ID"
        value={leadId}
        onChangeText={handleLeadIdChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Assigned To"
        value={assignedTo}
        onChangeText={handleAssignedToChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={status}
        onChangeText={handleStatusChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Notes"
        value={notes}
        onChangeText={handleNotesChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Documents"
        value={documents}
        onChangeText={handleDocumentsChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default OpportunityForm;