import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContentDetailScreen = ({ route, navigation }) => {
  const { id, title, subtitle } = route.params;

  useEffect(() => {
    if (title && subtitle) {
      navigation.setOptions({ title: `${title} - ${subtitle}` });
    }
  }, [navigation, title, subtitle]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Content: {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#18191a',
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default ContentDetailScreen; 