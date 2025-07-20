import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, MD3DarkTheme, IconButton } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, Platform } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ContentDetailScreen from './src/screens/ContentDetailScreen';
import SocialsScreen from './src/screens/SocialScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => setIsLoggedIn(false);

  function HomeStack({ handleLogout }) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#2a2b2b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          options={{
            title: 'Home',
            headerRight: () => (
              <IconButton
                icon="logout"
                color="#fff"
                size={24}
                onPress={handleLogout}
                style={{ marginRight: 8 }}
              />
            ),
          }}
        >
          {props => <HomeScreen {...props} onLogout={handleLogout} />}
        </Stack.Screen>
        <Stack.Screen name="ContentDetail" component={ContentDetailScreen} options={{ title: 'Detail' }} />
      </Stack.Navigator>
    );
  }

  function SocialsStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#2a2b2b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="SocialsScreen" component={SocialsScreen} options={{ title: 'Socials' }} />
      </Stack.Navigator>
    );
  }

  function ProfileStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#2a2b2b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile' }} />
      </Stack.Navigator>
    );
  }

  if (!isLoggedIn) {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={customDarkTheme}>
          <View style={styles.appContainer}>
            <LoginScreen onLogin={() => setIsLoggedIn(true)} />
          </View>
        </PaperProvider>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <PaperProvider theme={customDarkTheme}>
        <View style={styles.appContainer}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: { 
                  backgroundColor: '#2a2b2b', 
                  borderTopColor: '#232323',
                  ...(Platform.OS === 'web' && {
                    maxWidth: 480,
                    alignSelf: 'center',
                    width: '100%',
                    position: 'fixed',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }),
                },
                tabBarActiveTintColor: '#90caf9',
                tabBarInactiveTintColor: '#888',
                tabBarIcon: ({ color, size }) => {
                  let iconName;
                  if (route.name === 'HomeTab') iconName = 'home-variant';
                  else if (route.name === 'SocialsTab') iconName = 'web';
                  else if (route.name === 'ProfileTab') iconName = 'account';
                  else iconName = 'help';
                  return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
                },
              })}
            >
              <Tab.Screen name="HomeTab" options={{ title: 'Home' }}>
                {() => <HomeStack handleLogout={handleLogout} />}
              </Tab.Screen>
              <Tab.Screen name="SocialsTab" component={SocialsStack} options={{ title: 'Socials' }} />
              <Tab.Screen name="ProfileTab" component={ProfileStack} options={{ title: 'Profile' }} />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#222323',
    ...(Platform.OS === 'web' && {
      maxWidth: 480,
      alignSelf: 'center',
      width: '100%',
      minHeight: '100vh',
      boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    }),
  },
});

