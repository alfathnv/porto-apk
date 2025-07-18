import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Title, Button, BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SocialScreen from './SocialScreen';

const HomeRoute = ({ onLogout }) => (
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
);

const SocialsRoute = () => (
  <SocialScreen />
);

const ProfileRoute = () => (
  <View style={styles.content}>
    <Text style={styles.title}>Profile Page (Coming Soon)</Text>
  </View>
);

const HomeScreen = ({ onLogout }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home-variant' },
    { key: 'socials', title: 'Socials', icon: 'web' },
    { key: 'profile', title: 'Profile', icon: 'account' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'home':
        return <HomeRoute onLogout={onLogout} />;
      case 'socials':
        return <SocialsRoute />;
      case 'profile':
        return <ProfileRoute />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home" subtitle="Welcome to the app" />
        <Appbar.Action icon="logout" onPress={onLogout} />
      </Appbar.Header>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={styles.bottomBar}
        sceneAnimationEnabled={false}
        renderIcon={({ route, color }) => (
          <MaterialCommunityIcons name={route.icon} color={color} size={24} />
        )}
      />
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
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 16,
  },
  bottomBar: {
    backgroundColor: '#2a2b2b',
  },
  socialBox: {
    backgroundColor: '#2a2b2b',
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default HomeScreen; 