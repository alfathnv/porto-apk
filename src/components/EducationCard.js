import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const EducationCard = ({ education }) => {
  const theme = useTheme();

  return (
    <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
      <Card.Content>
        <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>
          Education
        </Text>
        {education.map((edu, index) => (
          <View key={index} style={styles.educationItem}>
            <Text variant="titleSmall" style={[styles.degree, { color: theme.colors.onSurface }]}>
              {edu.degree}
            </Text>
            <Text variant="bodyMedium" style={[styles.school, { color: theme.colors.primary }]}>
              {edu.school}
            </Text>
            <View style={styles.educationDetails}>
              <Text variant="bodySmall" style={[styles.period, { color: theme.colors.onSurfaceVariant }]}>
                {edu.period}
              </Text>
              <Text variant="bodySmall" style={[styles.gpa, { color: theme.colors.onSurfaceVariant }]}>
                GPA: {edu.gpa}
              </Text>
            </View>
            
            <View style={styles.finalProjectSection}>
              <Text variant="bodyMedium" style={[styles.finalProjectTitle, { color: theme.colors.onSurface }]}>
                Final Project:
              </Text>
              <Text variant="bodyMedium" style={[styles.finalProjectText, { color: theme.colors.onSurfaceVariant }]}>
                {edu.finalProject}
              </Text>
            </View>

            {edu.achievements && edu.achievements.length > 0 && (
              <View style={styles.achievementsSection}>
                <Text variant="bodyMedium" style={[styles.achievementsTitle, { color: theme.colors.onSurface }]}>
                  Achievements:
                </Text>
                {edu.achievements.map((achievement, idx) => (
                  <View key={idx} style={styles.achievementItem}>
                    <MaterialCommunityIcons name="trophy" size={16} color={theme.colors.primary} />
                    <Text variant="bodySmall" style={[styles.achievementText, { color: theme.colors.onSurfaceVariant }]}>
                      {achievement}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {edu.activities && edu.activities.length > 0 && (
              <View style={styles.activitiesSection}>
                <Text variant="bodyMedium" style={[styles.activitiesTitle, { color: theme.colors.onSurface }]}>
                  Activities & Societies:
                </Text>
                {edu.activities.map((activity, idx) => (
                  <View key={idx} style={styles.activityItem}>
                    <MaterialCommunityIcons name="account-group" size={16} color={theme.colors.primary} />
                    <Text variant="bodySmall" style={[styles.activityText, { color: theme.colors.onSurfaceVariant }]}>
                      {activity}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
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
  educationItem: {
    marginBottom: 16,
  },
  degree: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  school: {
    fontWeight: '600',
    marginBottom: 4,
  },
  educationDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  gpa: {
    fontWeight: '600',
  },
  finalProjectSection: {
    marginBottom: 16,
  },
  finalProjectTitle: {
    fontWeight: '600',
    marginBottom: 4,
  },
  finalProjectText: {
    lineHeight: 20,
  },
  achievementsSection: {
    marginBottom: 16,
  },
  achievementsTitle: {
    fontWeight: '600',
    marginBottom: 8,
  },
  activitiesSection: {
    marginBottom: 16,
  },
  activitiesTitle: {
    fontWeight: '600',
    marginBottom: 8,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  achievementText: {
    marginLeft: 8,
    flex: 1,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  activityText: {
    marginLeft: 8,
    flex: 1,
    lineHeight: 18,
  },
});

export default EducationCard; 