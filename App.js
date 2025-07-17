import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Provider as PaperProvider,
  MD3DarkTheme,
} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
  // Custom dark theme with #222323 background
  const customDarkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      background: '#222323',
      surface: '#2a2b2b',
      surfaceVariant: '#323333',
      onSurface: '#f0f6f0',
      onSurfaceVariant: '#f0f6f0',
      primary: '#90caf9',
      onPrimary: '#1976d2',
      outline: '#424242',
    },
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <SafeAreaProvider>
      <PaperProvider theme={customDarkTheme}>
        <StatusBar style="light" />
        {isLoggedIn ? (
          <HomeScreen onLogout={handleLogout} />
        ) : (
          <LoginScreen onLogin={handleLogin} />
        )}
      </PaperProvider>
    </SafeAreaProvider>
  );
}

