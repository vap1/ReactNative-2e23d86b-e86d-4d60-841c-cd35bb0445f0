
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { LeadRequest } from '../types/LeadTypes';
import { addLead } from '../apis/LeadApi';

interface LeadFormProps {
  onSubmit: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [contactDetails, setContactDetails] = useState('');
  const [relevantInfo, setRelevantInfo] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');

  const handleContactDetailsChange = (text: string) => {
    setContactDetails(text);
  };

  const handleRelevantInfoChange = (text: string) => {
    setRelevantInfo(text);
  };

  const handleAssignedToChange = (text: string) => {
    setAssignedTo(text);
  };

  const handleStatusChange = (text: string) => {
    setStatus(text);
  };

  const handleSubmit = async () => {
    const leadRequest: LeadRequest = {
      contactDetails,
      relevantInfo,
      assignedTo,
      status,
    };

    try {
      await addLead(leadRequest);
      onSubmit();
    } catch (error) {
      console.error('Error adding lead:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Contact Details"
        value={contactDetails}
        onChangeText={handleContactDetailsChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Relevant Info"
        value={relevantInfo}
        onChangeText={handleRelevantInfoChange}
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

export default LeadForm;