import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Card, useTheme } from 'react-native-paper';

const AboutCard = ({ personalData }) => {
  const theme = useTheme();

  return (
    <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
      <Card.Content>
        <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>
          About Me
        </Text>
        <Text variant="bodyMedium" style={[styles.aboutText, { color: theme.colors.onSurfaceVariant }]}>
          {personalData.about}
        </Text>
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
  aboutText: {
    lineHeight: 22,
  },
});

export default AboutCard; 