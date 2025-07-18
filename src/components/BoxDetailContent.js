import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const BoxDetailContent = ({ image, description }) => (
  <View style={styles.outerContainer}>
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="stretch" />
      <View style={styles.textContainer}>
        {description ? <Text style={styles.description}>{description}</Text> : null}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 16
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 16,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
  },
  description: {
    color: '#eee',
    fontSize: 15,
  },
});

export default BoxDetailContent; 