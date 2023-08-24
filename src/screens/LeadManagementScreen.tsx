
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Lead } from '../types/LeadTypes';
import { getLeads } from '../apis/LeadApi';

interface LeadManagementScreenProps {
  // Add any necessary props here
}

const LeadManagementScreen: React.FC<LeadManagementScreenProps> = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await getLeads();
      setLeads(response);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  const renderLead = ({ item }: { item: Lead }) => (
    <View style={styles.leadContainer}>
      <Text style={styles.leadId}>{item.leadId}</Text>
      <Text style={styles.leadContact}>{item.contactDetails}</Text>
      <Text style={styles.leadInfo}>{item.relevantInfo}</Text>
      <Text style={styles.leadAssignedTo}>{item.assignedTo}</Text>
      <Text style={styles.leadStatus}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lead Management</Text>
      <FlatList
        data={leads}
        renderItem={renderLead}
        keyExtractor={(item) => item.leadId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  leadContainer: {
    marginBottom: 12,
  },
  leadId: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  leadContact: {
    fontSize: 16,
  },
  leadInfo: {
    fontSize: 16,
  },
  leadAssignedTo: {
    fontSize: 16,
  },
  leadStatus: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default LeadManagementScreen;