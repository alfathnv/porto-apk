import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

const BoxDetailContent = ({ image, description, onImagePress }) => (
  <View style={styles.outerContainer}>
    <View style={styles.container}>
        <TouchableOpacity onPress={onImagePress} activeOpacity={0.8} style={styles.imageContainer}>
          <Image
            source={image}
            style={styles.fullImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        {description ? <Text style={styles.description}>{description}</Text> : null}
      </View>
  </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '90%',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  outerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
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