import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SocialScreen = () => (
  <View style={styles.socialsGrid}>
    <View style={styles.socialsRow}>
      <View style={styles.socialSquare}>
        <MaterialCommunityIcons name="facebook" size={36} color="#4267B2" />
        <Text style={styles.socialLabel}>Facebook</Text>
      </View>
      <View style={styles.socialSquare}>
        <MaterialCommunityIcons name="twitter" size={36} color="#1DA1F2" />
        <Text style={styles.socialLabel}>Twitter</Text>
      </View>
    </View>
    <View style={styles.socialsRow}>
      <View style={styles.socialSquare}>
        <MaterialCommunityIcons name="instagram" size={36} color="#C13584" />
        <Text style={styles.socialLabel}>Instagram</Text>
      </View>
      <View style={styles.socialSquare}>
        <MaterialCommunityIcons name="web" size={36} color="#90caf9" />
        <Text style={styles.socialLabel}>Website</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  socialsGrid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222323',
  },
  socialsRow: {
    flexDirection: 'row',
  },
  socialSquare: {
    width: 120,
    height: 120,
    backgroundColor: '#232425',
    borderRadius: 16,
    margin: 12,
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
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SocialScreen; 