
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Lead } from '../types/LeadTypes';
import { getLeads } from '../apis/LeadApi';

const LeadManagementScreen: React.FC = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lead Management</Text>
      {leads.map((lead) => (
        <View key={lead.leadId} style={styles.leadContainer}>
          <Text style={styles.leadContact}>{lead.contactDetails}</Text>
          <Text style={styles.leadInfo}>{lead.relevantInfo}</Text>
          <Text style={styles.leadAssignedTo}>{lead.assignedTo}</Text>
          <Text style={styles.leadStatus}>{lead.status}</Text>
        </View>
      ))}
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
    marginBottom: 16,
  },
  leadContact: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  leadInfo: {
    fontSize: 14,
    color: 'gray',
  },
  leadAssignedTo: {
    fontSize: 14,
  },
  leadStatus: {
    fontSize: 14,
  },
});

export default LeadManagementScreen;