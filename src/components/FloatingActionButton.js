import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FloatingActionButton = () => {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    const toValue = isExpanded ? 0 : 1;
    setIsExpanded(!isExpanded);
    
    Animated.spring(animation, {
      toValue,
      useNativeDriver: true,
      tension: 100,
      friction: 8,
    }).start();
  };

  const actionButtons = [
    {
      icon: 'account',
      label: 'Profile',
      onPress: () => navigation.navigate('Profile'),
      color: '#007AFF',
    },
    {
      icon: 'share-variant',
      label: 'Share',
      onPress: () => {
        // Add share functionality
        console.log('Share portfolio');
      },
      color: '#34C759',
    },
    {
      icon: 'message',
      label: 'Contact',
      onPress: () => navigation.navigate('Social'),
      color: '#FF9500',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Action Buttons */}
      {actionButtons.map((action, index) => (
        <Animated.View
          key={action.label}
          style={[
            styles.actionButton,
            {
              backgroundColor: action.color,
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -(index + 1) * 60],
                  }),
                },
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ],
              opacity: animation,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.actionTouchable}
            onPress={action.onPress}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name={action.icon} size={24} color="#fff" />
          </TouchableOpacity>
        </Animated.View>
      ))}

      {/* Main FAB */}
      <TouchableOpacity
        style={styles.fab}
        onPress={toggleMenu}
        activeOpacity={0.8}
      >
        <Animated.View
          style={{
            transform: [
              {
                rotate: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '45deg'],
                }),
              },
            ],
          }}
        >
          <MaterialCommunityIcons name="plus" size={28} color="#fff" />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    alignItems: 'center',
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  actionButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  actionTouchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FloatingActionButton; 