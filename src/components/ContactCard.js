import React from 'react';
import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Text, Card, useTheme } from 'react-native-paper';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const ContactCard = ({ personalData }) => {
  const theme = useTheme();

  const handleContactPress = (type, value) => {
    switch (type) {
      case 'email':
        Linking.openURL(`mailto:${value}`);
        break;
      case 'whatsapp':
        const cleanPhone = value.replace(/\D/g, '');
        Linking.openURL(`https://wa.me/${cleanPhone}`);
        break;
      case 'linkedin':
      case 'github':
        Linking.openURL(value);
        break;
    }
  };

  return (
    <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
      <Card.Content>
        <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>
          Contact Information
        </Text>
        <View style={styles.contactGrid}>
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => handleContactPress('email', personalData.email)}
          >
            <MaterialIcons name="email" size={20} color={theme.colors.primary} />
            <Text variant="bodyMedium" style={[styles.contactText, { color: theme.colors.onSurface }]}>
              {personalData.email}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => handleContactPress('whatsapp', personalData.phone)}
          >
            <FontAwesome5 name="whatsapp" size={20} color={theme.colors.primary} />
            <Text variant="bodyMedium" style={[styles.contactText, { color: theme.colors.onSurface }]}>
              {personalData.phone}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => handleContactPress('linkedin', personalData.linkedin)}
          >
            <FontAwesome5 name="linkedin" size={20} color={theme.colors.primary} />
            <Text variant="bodyMedium" style={[styles.contactText, { color: theme.colors.onSurface }]}>
              {personalData.linkedin.replace('https://', '')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => handleContactPress('github', personalData.github)}
          >
            <FontAwesome5 name="github" size={20} color={theme.colors.primary} />
            <Text variant="bodyMedium" style={[styles.contactText, { color: theme.colors.onSurface }]}>
              {personalData.github.replace('https://', '')}
            </Text>
          </TouchableOpacity>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contactGrid: {
    gap: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  contactText: {
    marginLeft: 12,
    flex: 1,
  },
});

export default ContactCard; 