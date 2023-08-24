
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TaskDetails } from '../api/types'; // Import the generated API types

const TaskAssignmentScreen: React.FC = () => {
  const [tasks, setTasks] = useState<TaskDetails[]>([]);

  useEffect(() => {
    // Fetch tasks from the backend API
    const fetchTasks = async () => {
      try {
        const response = await fetch('/tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <View>
      <Text>Task Assignment Screen</Text>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.taskId}
        renderItem={({ item }) => (
          <View>
            <Text>Task ID: {item.taskId}</Text>
            <Text>Assigned To: {item.assignedTo}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Comments: {item.comments}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TaskAssignmentScreen;