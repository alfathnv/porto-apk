import React from 'react';
import { View, StyleSheet, useWindowDimensions, TouchableOpacity, Linking, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { socialList } from '../datas/socialList';

const SocialScreen = () => {
  const { width } = useWindowDimensions();
  
  const screenPadding = 20;
  const availableWidth = width - (screenPadding * 2);
  const squareSize = Math.min(availableWidth / 2 - 16, 140);
  const iconSize = Math.max(squareSize * 0.3, 24);
  const fontSize = Math.max(squareSize * 0.13, 12);
  
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
            style={[styles.socialSquare, { width: squareSize, height: squareSize }]}
            onPress={() => handleSocialPress(social)}
            activeOpacity={0.7}
          >
            <MaterialCommunityIcons 
              name={social.icon} 
              size={iconSize} 
              color={social.color} 
            />
            <Text style={[styles.socialLabel, { fontSize }]}>{social.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={[styles.socialsGrid, { paddingHorizontal: screenPadding }]}>
      {renderSocialRow(0)}
      {renderSocialRow(2)}
      {renderSocialRow(4)}
      {renderSocialRow(6)}
    </View>
  );
};

const styles = StyleSheet.create({
  socialsGrid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222323',
  },
  socialsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialSquare: {
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
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default SocialScreen; 