
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
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
  leadContainer: {
    marginBottom: 16,
  },
  leadId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  leadContact: {
    fontSize: 14,
    color: 'gray',
  },
  leadInfo: {
    fontSize: 14,
  },
  leadAssignedTo: {
    fontSize: 14,
  },
  leadStatus: {
    fontSize: 14,
  },
});

export default LeadManagementScreen;