
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Employee } from '../types/EmployeeTypes';
import { getEmployees } from '../apis/EmployeeApi';

const EmployeeManagementScreen: React.FC = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Management</Text>
      {employees.map((employee) => (
        <View key={employee.employeeId} style={styles.employeeContainer}>
          <Text style={styles.employeeName}>{employee.name}</Text>
          <Text style={styles.employeeContact}>{employee.contactInfo}</Text>
          <Text style={styles.employeeRole}>{employee.role}</Text>
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

export default EmployeeManagementScreen;