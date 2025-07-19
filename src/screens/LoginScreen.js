import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Platform, Alert, Image } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const LoginScreen = ({ onLogin }) => {
  const [num1] = useState(getRandomInt(1, 10));
  const [num2] = useState(getRandomInt(1, 10));
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      if (parseInt(answer, 10) === num1 + num2) {
        onLogin();
      } else {
        Alert.alert('Login Failed', 'Incorrect answer. Please try again.');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#222323' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ flex: 1}} />

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../assets/logo.png')}
              style={{ width: 160, height: 160, resizeMode: 'contain', marginBottom: 0 }}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: '100%', maxWidth: 400, alignItems: 'center', paddingHorizontal: 32 }}>
              <Title style={{ color: '#fff', marginBottom: 16, fontSize: 20 }}>
                {num1} + {num2} = ?
              </Title>
              <TextInput
                label="Insert the answer"
                value={answer}
                onChangeText={setAnswer}
                mode="outlined"
                keyboardType="numeric"
                style={{ width: '100%', marginBottom: 24 }}
                left={<TextInput.Icon icon="calculator" />}
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
          <View style={{ flex: 1.5 }} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen; 