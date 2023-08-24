
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Opportunity, OpportunityResponse } from '../types/OpportunityTypes';
import { addOpportunity } from '../apis/OpportunityApi';

interface OpportunityFormProps {
  onOpportunityAdded: (opportunity: Opportunity) => void;
}

const OpportunityForm: React.FC<OpportunityFormProps> = ({ onOpportunityAdded }) => {
  const [leadId, setLeadId] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');
  const [documents, setDocuments] = useState('');

  const handleAddOpportunity = async () => {
    try {
      const opportunity: Opportunity = {
        opportunityId: '',
        leadId,
        assignedTo,
        status,
        notes,
        documents,
      };

      const response: OpportunityResponse = await addOpportunity({ opportunity });
      if (response.success) {
        onOpportunityAdded(opportunity);
        setLeadId('');
        setAssignedTo('');
        setStatus('');
        setNotes('');
        setDocuments('');
      } else {
        console.error('Error adding opportunity:', response.errorMessage);
      }
    } catch (error) {
      console.error('Error adding opportunity:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Lead ID"
        value={leadId}
        onChangeText={setLeadId}
      />
      <TextInput
        style={styles.input}
        placeholder="Assigned To"
        value={assignedTo}
        onChangeText={setAssignedTo}
      />
      <TextInput
        style={styles.input}
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
      />
      <TextInput
        style={styles.input}
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
      />
      <TextInput
        style={styles.input}
        placeholder="Documents"
        value={documents}
        onChangeText={setDocuments}
      />
      <Button title="Add Opportunity" onPress={handleAddOpportunity} />
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
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default OpportunityForm;