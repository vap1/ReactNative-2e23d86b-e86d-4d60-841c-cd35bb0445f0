
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface LeadFormProps {
  onSubmit: (lead: Lead) => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSubmit }) => {
  const [contactDetails, setContactDetails] = useState('');
  const [relevantInfo, setRelevantInfo] = useState('');

  const handleFormSubmit = () => {
    const lead: Lead = {
      leadId: '',
      contactDetails,
      relevantInfo,
      assignedTo: '',
      status: '',
    };
    onSubmit(lead);
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
      <Button title="Submit" onPress={handleFormSubmit} />
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