
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Lead, LeadResponse } from '../types/LeadTypes';
import { addLead } from '../apis/LeadApi';

interface LeadFormProps {
  onLeadAdded: (lead: Lead) => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onLeadAdded }) => {
  const [contactDetails, setContactDetails] = useState('');
  const [relevantInfo, setRelevantInfo] = useState('');

  const handleAddLead = async () => {
    try {
      const lead: Lead = {
        leadId: '',
        contactDetails,
        relevantInfo,
        assignedTo: '',
        status: '',
      };

      const response: LeadResponse = await addLead({ lead });
      if (response.success) {
        onLeadAdded(lead);
        setContactDetails('');
        setRelevantInfo('');
      } else {
        console.error('Error adding lead:', response.errorMessage);
      }
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
        onChangeText={setContactDetails}
      />
      <TextInput
        style={styles.input}
        placeholder="Relevant Info"
        value={relevantInfo}
        onChangeText={setRelevantInfo}
      />
      <Button title="Add Lead" onPress={handleAddLead} />
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

export default LeadForm;