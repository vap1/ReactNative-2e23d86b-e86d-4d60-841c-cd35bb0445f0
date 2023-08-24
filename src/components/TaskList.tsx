
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Task } from '../types/TaskTypes';
import { getTasks } from '../apis/TaskApi';

const TaskList: React.FC = () => {
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

  const renderTask = ({ item }: { item: Task }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskId}>{item.taskId}</Text>
      <Text style={styles.taskAssignedTo}>{item.assignedTo}</Text>
      <Text style={styles.taskStatus}>{item.status}</Text>
      <Text style={styles.taskComments}>{item.comments}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.taskId}
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
  taskContainer: {
    marginBottom: 12,
  },
  taskId: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskAssignedTo: {
    fontSize: 16,
  },
  taskStatus: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  taskComments: {
    fontSize: 16,
  },
});

export default TaskList;