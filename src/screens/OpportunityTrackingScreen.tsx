
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { OpportunityDetails } from '../api/types';
import { getOpportunities } from '../api/opportunities';

const OpportunityTrackingScreen: React.FC = () => {
  const [opportunities, setOpportunities] = useState<OpportunityDetails[]>([]);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  const fetchOpportunities = async () => {
    try {
      const opportunitiesData = await getOpportunities();
      setOpportunities(opportunitiesData);
    } catch (error) {
      console.error('Error fetching opportunities:', error);
    }
  };

  const renderOpportunityItem = ({ item }: { item: OpportunityDetails }) => (
    <TouchableOpacity onPress={() => handleOpportunityPress(item)}>
      <View>
        <Text>{item.opportunityId}</Text>
        <Text>{item.status}</Text>
        {/* Render other opportunity details */}
      </View>
    </TouchableOpacity>
  );

  const handleOpportunityPress = (opportunity: OpportunityDetails) => {
    // Handle opportunity press action
  };

  return (
    <View>
      <Text>Opportunity Tracking</Text>
      <FlatList
        data={opportunities}
        renderItem={renderOpportunityItem}
        keyExtractor={(item) => item.opportunityId}
      />
    </View>
  );
};

export default OpportunityTrackingScreen;