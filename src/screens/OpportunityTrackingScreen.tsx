
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Opportunity } from '../types/OpportunityTypes';
import { getOpportunities } from '../apis/OpportunityApi';

interface OpportunityTrackingScreenProps {
  // Add any necessary props here
}

const OpportunityTrackingScreen: React.FC<OpportunityTrackingScreenProps> = () => {
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
      <Text style={styles.title}>Opportunity Tracking</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  opportunityContainer: {
    marginBottom: 12,
  },
  opportunityId: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  opportunityLeadId: {
    fontSize: 16,
  },
  opportunityAssignedTo: {
    fontSize: 16,
  },
  opportunityStatus: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  opportunityNotes: {
    fontSize: 16,
  },
  opportunityDocuments: {
    fontSize: 16,
  },
});

export default OpportunityTrackingScreen;