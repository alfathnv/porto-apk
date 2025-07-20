import React, { useRef } from 'react';
import { View, Animated, Pressable, StyleSheet, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BlurredPressableBox = ({ image, title, subtitle, devLabel = 'Coming Soon', id, disableNavigate = false }) => {
  const navigation = useNavigation();
  const animBox = useRef(new Animated.Value(0)).current;
  const animFont = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.parallel([
      Animated.timing(animBox, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animFont, {
        toValue: 1,
        duration: 60,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const handlePressOut = () => {
    Animated.parallel([
      Animated.timing(animBox, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animFont, {
        toValue: 0,
        duration: 60,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const overlayOpacity = animBox.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.25],
  });
  const imageOpacity = animBox.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 0.3],
  });
  const scale = animBox.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.04],
  });

  return (
    <Pressable
      style={styles.contentBox}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => {
        if (!disableNavigate) {
          navigation.navigate('ContentDetail', { id, title, subtitle });
        }
      }}
    >
      <Animated.View style={{ flex: 1, width: '100%', height: '100%', transform: [{ scale }] }}>
        <Animated.Image source={image} style={[styles.contentImage, { opacity: imageOpacity }]} blurRadius={3} />
        <Animated.View style={[styles.brightOverlay, { opacity: overlayOpacity }]} />
        <View style={styles.overlayTextContainer}>
          <Animated.Text
            style={[
              styles.overlayTitle,
              {
                fontSize: animFont.interpolate({
                  inputRange: [0, 1],
                  outputRange: [22, 26],
                }),
              },
            ]}
          >
            {title}
          </Animated.Text>
          <Animated.Text
            style={[
              styles.overlaySubtitle,
              {
                fontSize: animFont.interpolate({
                  inputRange: [0, 1],
                  outputRange: [16, 19],
                }),
              },
            ]}
          >
            {subtitle}
          </Animated.Text>
          <Text style={styles.devLabel}>{devLabel}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contentBox: {
    width: '100%',
    height: 160,
    backgroundColor: '#2a2b2b',
    borderRadius: 12,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
    overflow: 'hidden',
    ...(Platform.OS === 'web' && {
      maxWidth: 400,
    }),
  },
  contentImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  brightOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 8,
    zIndex: 1,
  },
  overlayTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    display: 'flex',
  },
  overlayTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  overlaySubtitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 2,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  devLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default BlurredPressableBox; 