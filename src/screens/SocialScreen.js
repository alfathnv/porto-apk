import React from 'react';
import { View, StyleSheet, useWindowDimensions, TouchableOpacity, Linking, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { socialList } from '../datas/socialList';

const SocialScreen = () => {
  const { width, height } = useWindowDimensions();
  
  // Calculate responsive dimensions
  const screenPadding = 20;
  const availableWidth = width - (screenPadding * 2);
  const squareSize = Math.min(availableWidth / 2 - 16, 140); // Max 140px, min based on screen
  const iconSize = Math.max(squareSize * 0.3, 24); // Responsive icon size
  const fontSize = Math.max(squareSize * 0.13, 12); // Responsive font size
  
  const handleSocialPress = async (social) => {
    try {
      const supported = await Linking.canOpenURL(social.url);
      
      if (supported) {
        await Linking.openURL(social.url);
      } else {
        Alert.alert(
          'Error',
          `Cannot open ${social.name}. Please check if the app is installed.`,
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      Alert.alert(
        'Error',
        `Failed to open ${social.name}. Please try again.`,
        [{ text: 'OK' }]
      );
    }
  };

  const renderSocialRow = (startIndex) => {
    const rowItems = socialList.slice(startIndex, startIndex + 2);
    
    return (
      <View style={styles.socialsRow} key={`row-${startIndex}`}>
        {rowItems.map((social) => (
          <TouchableOpacity
            key={social.id}
            style={styles.socialSquare}
            onPress={() => handleSocialPress(social)}
            activeOpacity={0.7}
          >
            <MaterialCommunityIcons 
              name={social.icon} 
              size={iconSize} 
              color={social.color} 
            />
            <Text style={styles.socialLabel}>{social.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    socialsGrid: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#222323',
      paddingHorizontal: screenPadding,
    },
    socialsRow: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    socialSquare: {
      width: squareSize,
      height: squareSize,
      backgroundColor: '#232425',
      borderRadius: 16,
      margin: 8,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    socialLabel: {
      color: '#fff',
      marginTop: 8,
      fontSize: fontSize,
      fontWeight: '600',
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.socialsGrid}>
      {renderSocialRow(0)} {/* Email, WA */}
      {renderSocialRow(2)} {/* LinkedIn, Github */}
      {renderSocialRow(4)} {/* Instagram, Discord */}
      {renderSocialRow(6)} {/* Artstation, Itch.io */}
    </View>
  );
};

export default SocialScreen; 