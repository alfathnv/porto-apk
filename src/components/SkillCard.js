import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Chip, useTheme } from 'react-native-paper';

const SkillCard = ({ skills }) => {
  const theme = useTheme();

  return (
    <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
      <Card.Content>
        <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>
          Skills
        </Text>
        <View style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <Chip 
              key={index} 
              style={[styles.skillChip, { backgroundColor: skill.color }]}
              textStyle={[styles.skillChipText, { color: '#FFFFFF' }]}
            >
              {skill.name}
            </Chip>
          ))}
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
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  skillChip: {
    marginBottom: 8,
  },
  skillChipText: {
    fontWeight: '600',
  },
});

export default SkillCard; 