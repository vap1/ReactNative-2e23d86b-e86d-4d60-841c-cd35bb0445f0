
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Opportunity } from '../types/OpportunityTypes';
import { getOpportunities } from '../apis/OpportunityApi';

const OpportunityTrackingScreen: React.FC = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  const fetchOpportunities = async () => {
    try {
      const response = await getOpportunities();
      setOpportunities(response);
    } catch (error) {
      console.error('Error fetching opportunities:', error);
    }
  };

  const renderOpportunity = ({ item }: { item: Opportunity }) => (
    <View style={styles.opportunityContainer}>
      <Text style={styles.opportunityId}>{item.opportunityId}</Text>
      <Text style={styles.opportunityLeadId}>{item.leadId}</Text>
      <Text style={styles.opportunityAssignedTo}>{item.assignedTo}</Text>
      <Text style={styles.opportunityStatus}>{item.status}</Text>
      <Text style={styles.opportunityNotes}>{item.notes}</Text>
      <Text style={styles.opportunityDocuments}>{item.documents}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={opportunities}
        renderItem={renderOpportunity}
        keyExtractor={(item) => item.opportunityId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  opportunityContainer: {
    marginBottom: 16,
  },
  opportunityId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  opportunityLeadId: {
    fontSize: 14,
    color: 'gray',
  },
  opportunityAssignedTo: {
    fontSize: 14,
  },
  opportunityStatus: {
    fontSize: 14,
  },
  opportunityNotes: {
    fontSize: 14,
  },
  opportunityDocuments: {
    fontSize: 14,
  },
});

export default OpportunityTrackingScreen;