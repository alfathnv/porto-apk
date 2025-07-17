import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Title, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ onLogout }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home" subtitle="Welcome to the app" />
        <Appbar.Action icon="logout" onPress={onLogout} />
      </Appbar.Header>
      
      <View style={styles.content}>
        <Title style={styles.title}>Welcome to Home Page</Title>
        <Button 
          mode="outlined" 
          onPress={onLogout}
          style={styles.logoutButton}
        >
          Logout
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222323',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    color: '#ffffff',
    marginBottom: 32,
    fontSize: 24,
  },
  logoutButton: {
    marginTop: 16,
  },
});

export default HomeScreen; 