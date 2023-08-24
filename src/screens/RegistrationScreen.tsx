
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { UserRegistrationRequest, UserRegistrationResponse } from '../types/UserTypes';
import { registerUser } from '../apis/UserApi';

const RegistrationScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handleRoleChange = (text: string) => {
    setRole(text);
  };

  const handleSubmit = async () => {
    const registrationRequest: UserRegistrationRequest = {
      username,
      password,
      email,
      role,
    };

    try {
      const response: UserRegistrationResponse = await registerUser(registrationRequest);
      if (response.success) {
        // Registration successful, navigate to the next screen
      } else {
        // Registration failed, display error message
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Role"
        value={role}
        onChangeText={handleRoleChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default RegistrationScreen;