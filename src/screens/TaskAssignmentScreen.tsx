
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Task } from '../types/TaskTypes';
import { getTasks } from '../apis/TaskApi';

const TaskAssignmentScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Assignment</Text>
      {tasks.map((task) => (
        <View key={task.taskId} style={styles.taskContainer}>
          <Text style={styles.taskAssignedTo}>{task.assignedTo}</Text>
          <Text style={styles.taskStatus}>{task.status}</Text>
          <Text style={styles.taskComments}>{task.comments}</Text>
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
  taskContainer: {
    marginBottom: 16,
  },
  taskAssignedTo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskStatus: {
    fontSize: 14,
    color: 'gray',
  },
  taskComments: {
    fontSize: 14,
  },
});

export default TaskAssignmentScreen;