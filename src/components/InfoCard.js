import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

const InfoCard = ({ personalData }) => {
  const theme = useTheme();

  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.profileImage}
      />
      <View style={styles.headerInfo}>
        <Text variant="headlineMedium" style={[styles.name, { color: theme.colors.onBackground }]}>
          {personalData.name}
        </Text>
        <Text variant="titleMedium" style={[styles.title, { color: theme.colors.primary }]}>
          {personalData.title}
        </Text>
        <Text variant="titleMedium" style={[styles.title, { color: theme.colors.primary }]}>
          {personalData.subtitle}
        </Text>
        <Text variant="bodyMedium" style={[styles.location, { color: theme.colors.onSurfaceVariant }]}>
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
    width: 80,
    height: 80,
    borderRadius: 40,
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