
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Employee } from '../types/EmployeeTypes';
import { getEmployees } from '../apis/EmployeeApi';

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const renderEmployee = ({ item }: { item: Employee }) => (
    <View style={styles.employeeContainer}>
      <Text style={styles.employeeName}>{item.name}</Text>
      <Text style={styles.employeeContact}>{item.contactInfo}</Text>
      <Text style={styles.employeeRole}>{item.role}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={employees}
        renderItem={renderEmployee}
        keyExtractor={(item) => item.employeeId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  employeeContainer: {
    marginBottom: 16,
  },
  employeeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  employeeContact: {
    fontSize: 14,
    color: 'gray',
  },
  employeeRole: {
    fontSize: 14,
  },
});

export default EmployeeList;