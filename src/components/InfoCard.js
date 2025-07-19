import React from 'react';
import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

const InfoCard = ({ personalData }) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  
  const containerWidth = width - 32; // Account for padding
  const photoSize = containerWidth * 0.3; // 30% of container width
  const infoWidth = containerWidth * 0.7; // 70% of container width
  
  const nameFontSize = Math.max(photoSize * 0.15, 18);
  const titleFontSize = Math.max(photoSize * 0.12, 14);
  const locationFontSize = Math.max(photoSize * 0.1, 12);

  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/photo.jpeg')}
        style={[styles.profileImage, { width: photoSize, height: photoSize, borderRadius: photoSize / 2 }]}
      />
      <View style={[styles.headerInfo, { width: infoWidth }]}>
        <Text style={[styles.name, { color: theme.colors.onBackground, fontSize: nameFontSize }]}>
          {personalData.name}
        </Text>
        <Text style={[styles.title, { color: theme.colors.primary, fontSize: titleFontSize }]}>
          {personalData.title}
        </Text>
        <Text style={[styles.title, { color: theme.colors.primary, fontSize: titleFontSize }]}>
          {personalData.subtitle}
        </Text>
        <Text style={[styles.location, { color: theme.colors.onSurfaceVariant, fontSize: locationFontSize }]}>
          📍 {personalData.location}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
  },
  profileImage: {
    marginRight: 16,
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontWeight: '600',
    marginBottom: 4,
  },
  location: {
    opacity: 0.8,
  },
});

export default InfoCard; 