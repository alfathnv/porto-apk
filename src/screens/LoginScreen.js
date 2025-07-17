import React from 'react';
import { View, KeyboardAvoidingView, Platform, Alert, Image } from 'react-native';
import {
  TextInput,
  Button,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleLogin = () => {
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Check credentials
      if (username === 'admin' && password === '123456') {
        onLogin();
      } else {
        Alert.alert('Login Failed', 'Invalid username or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#222323' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={{ flex: 1, flexDirection: 'column' }}>
          {/* Top 30%: Logo */}
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          </View>
          {/* Middle 50%: Form */}
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../../assets/logo.png')}
              style={{ width: 160, height: 160, resizeMode: 'contain', marginBottom: 40 }}
            />
            <View style={{ width: '100%', maxWidth: 400, alignItems: 'center', paddingHorizontal: 32 }}>
              <TextInput
                label="Username"
                value={username}
                onChangeText={setUsername}
                mode="outlined"
                autoCapitalize="none"
                style={{ width: '100%', marginBottom: 16 }}
                left={<TextInput.Icon icon="account" />}
                theme={{ colors: { primary: '#90caf9' } }}
              />
              <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                mode="outlined"
                secureTextEntry
                style={{ width: '100%', marginBottom: 24 }}
                left={<TextInput.Icon icon="lock" />}
                theme={{ colors: { primary: '#90caf9' } }}
              />
              <Button
                mode="contained-tonal"
                buttonColor="#90caf9"
                textColor="#1976d2"
                loading={loading}
                onPress={handleLogin}
                style={{ width: '100%', borderRadius: 8, paddingVertical: 4 }}
                contentStyle={{ height: 48 }}
              >
                Login
              </Button>
            </View>
          </View>
          {/* Bottom 20%: Spacer */}
          <View style={{ flex: 1.5 }} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen; 