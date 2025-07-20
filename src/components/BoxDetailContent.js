import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Text } from 'react-native-paper';

// Helper function to get image source that works on both native and web
const getImageSource = (asset) => {
  if (Platform.OS === 'web') {
    // On web, we need to handle the asset differently
    if (asset && asset.default) {
      return asset.default;
    }
    return asset;
  } else {
    // On native, use resolveAssetSource
    return Image.resolveAssetSource(asset).uri;
  }
};

const BoxDetailContent = ({ image, description, onImagePress }) => (
  <View style={styles.outerContainer}>
    <TouchableOpacity onPress={onImagePress} activeOpacity={0.8} style={styles.imageContainer}>
      <Image
        source={image}
        style={styles.fullImage}
        resizeMode="contain"
      />
      {description && (
        <View style={styles.overlayTextContainer} pointerEvents="none">
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
  },
  fullImage: {
    width: '100%',
    height: '100%',
    maxHeight: 500,
  },
  outerContainer: {
    width: '100%',
    alignItems: 'center',
    ...(Platform.OS === 'web' && {
      maxWidth: 500,
    }),
  },
  overlayTextContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 36,
    backgroundColor: 'rgba(20,20,20,0.7)',
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'flex-start',
  },
  description: {
    color: '#eee',
    fontSize: 15,
  },
});

export default BoxDetailContent; 