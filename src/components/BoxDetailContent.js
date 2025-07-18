import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

const BoxDetailContent = ({ image, description, onImagePress }) => (
  <View style={styles.outerContainer}>
    <View style={styles.container}>
      <TouchableOpacity onPress={onImagePress} activeOpacity={0.8} style={styles.image}>
        <Image source={image} style={styles.image} resizeMode="cover" />
      </TouchableOpacity>
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
    paddingBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  textContainer: {
    width: '100%',
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