
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opportunity Tracking</Text>
      {opportunities.map((opportunity) => (
        <View key={opportunity.opportunityId} style={styles.opportunityContainer}>
          <Text style={styles.opportunityLeadId}>{opportunity.leadId}</Text>
          <Text style={styles.opportunityAssignedTo}>{opportunity.assignedTo}</Text>
          <Text style={styles.opportunityStatus}>{opportunity.status}</Text>
          <Text style={styles.opportunityNotes}>{opportunity.notes}</Text>
          <Text style={styles.opportunityDocuments}>{opportunity.documents}</Text>
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
  opportunityContainer: {
    marginBottom: 16,
  },
  opportunityLeadId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  opportunityAssignedTo: {
    fontSize: 14,
    color: 'gray',
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