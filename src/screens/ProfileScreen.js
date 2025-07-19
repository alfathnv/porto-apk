import React from 'react';
import { View, StyleSheet, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Text, Card, Chip, Divider, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const ProfileScreen = () => {
  const theme = useTheme();

  const handleContactPress = (type, value) => {
    switch (type) {
      case 'email':
        Linking.openURL(`mailto:${value}`);
        break;
      case 'phone':
        Linking.openURL(`tel:${value}`);
        break;
      case 'linkedin':
        Linking.openURL(value);
        break;
      case 'github':
        Linking.openURL(value);
        break;
      case 'portfolio':
        Linking.openURL(value);
        break;
    }
  };

  const skills = [
    { name: 'React', color: '#61DAFB' },
    { name: '.Net', color: '#512BD4' },
    { name: 'Laravel', color: '#FF2D20' },
    { name: 'Next.js', color: '#000000' },
    { name: 'Three.js', color: '#000000' },
    { name: 'Angular', color: '#DD0031' },
    { name: 'React Native', color: '#61DAFB' },
    { name: 'Unity', color: '#000000' },
    { name: 'Godot', color: '#478CBF' },

    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'LuaScript', color: '#000080' },

    { name: 'MySQL', color: '#4479A1' },
    { name: 'SQL Server', color: '#CC2927' },
    { name: 'Redis', color: '#DC382D' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'MongoDB', color: '#47A248' },

    { name: 'Python', color: '#3776AB' },
    { name: 'Node', color: '#339933' },
    { name: 'UI/UX Design', color: '#FF6B6B' },
    { name: 'HTML/CSS', color: '#E34F26' },
    { name: 'Git', color: '#F05032' },
    
    { name: 'Firebase', color: '#FFCA28' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'CI/CD', color: '#FF6B6B' },
    { name: 'Agile', color: '#4CAF50' },
    { name: 'Scrum', color: '#2196F3' },
    { name: 'Kanban', color: '#9C27B0' },

    { name: 'Blender 3D', color: '#F5792A' },
    { name: 'Aseprite', color: '#7D4CDB' },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'Telkom University',
      period: '2017 - 2021',
      gpa: '3.58/4.0',
      activities: [
        'Student Affair Head Division (Ketua Divisi Kemahasiswaan) of HIMA IF 2020',
        'Vice Chairman of CARNIVAL INFORMATICS 2019',
        'KP (Kakak Pembimbing) Division Staff of FORTRAN 2019',
        'Event Division Staff of PANDA 2019',
        'Event Division Staff of INTERFEST 2018',
        'Event Division Staff of HELLO WORLD 2018',
        'Event Division Staff of Carnival 2018',
        'Event Division Staff of Carnival 2017'
      ],
      finalProject: 'Sentiment Analysis on Movie Review using Information Gain and Decision Tree Classifier',
      achievements: ['Graduated within 7 semesters']
    }
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/logo.png')} // Replace with your profile photo
          style={styles.profileImage}
        />
        <View style={styles.headerInfo}>
          <Text variant="headlineMedium" style={[styles.name, { color: theme.colors.onBackground }]}>
            Alfath Noverio
          </Text>
          <Text variant="titleMedium" style={[styles.title, { color: theme.colors.primary }]}>
            Full Stack Programmer
          </Text>
          <Text variant="titleMedium" style={[styles.title, { color: theme.colors.primary }]}>
            Chief Technology Officer of Agranara
          </Text>
          <Text variant="bodyMedium" style={[styles.location, { color: theme.colors.onSurfaceVariant }]}>
            📍 Bandung, Indonesia
          </Text>
        </View>
      </View>

      {/* Contact Section */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Content>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>
            Contact Information
          </Text>
          <View style={styles.contactGrid}>
            <TouchableOpacity 
              style={styles.contactItem}
              onPress={() => handleContactPress('email', 'your.email@example.com')}
            >
              <MaterialIcons name="email" size={20} color={theme.colors.primary} />
              <Text variant="bodyMedium" style={[styles.contactText, { color: theme.colors.onSurface }]}>
                alfathnv@gmail.com
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.contactItem}
              onPress={() => handleContactPress('phone', '+1234567890')}
            >
              <MaterialIcons name="phone" size={20} color={theme.colors.primary} />
              <Text variant="bodyMedium" style={[styles.contactText, { color: theme.colors.onSurface }]}>
                +62 81324327564
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.contactItem}
              onPress={() => handleContactPress('linkedin', 'https://linkedin.com/in/alfathnv')}
            >
              <FontAwesome5 name="linkedin" size={20} color={theme.colors.primary} />
              <Text variant="bodyMedium" style={[styles.contactText, { color: theme.colors.onSurface }]}>
                linkedin.com/in/alfathnv/
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.contactItem}
              onPress={() => handleContactPress('github', 'https://github.com/alfathnv')}
            >
              <FontAwesome5 name="github" size={20} color={theme.colors.primary} />
              <Text variant="bodyMedium" style={[styles.contactText, { color: theme.colors.onSurface }]}>
                github.com/alfathnv
              </Text>
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>

      {/* About Section */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Content>
          <Text variant="titleMedium" style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>
            About Me
          </Text>
          <Text variant="bodyMedium" style={[styles.aboutText, { color: theme.colors.onSurfaceVariant }]}>
          I’m a Full-Stack Developer with experience in web and game development. I love solving problems, building user-friendly interfaces, and working across the stack from frontend UI to backend systems and infrastructure.
          I adapt quickly, enjoy learning new technologies, and take ownership of the projects I’m involved in. Beyond just writing code, I care about creating real impact through products that work well and scale effectively.
          My long-term goal is to build my own tech company and lead with a strong vision, product mindset, and collaborative spirit.
          </Text>
        </Card.Content>
      </Card>

      {/* Skills Section */}
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

      {/* Education Section */}
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
              
              {/* Final Project */}
              <View style={styles.finalProjectSection}>
                <Text variant="bodyMedium" style={[styles.finalProjectTitle, { color: theme.colors.onSurface }]}>
                  Final Project:
                </Text>
                <Text variant="bodyMedium" style={[styles.finalProjectText, { color: theme.colors.onSurfaceVariant }]}>
                  {edu.finalProject}
                </Text>
              </View>

              {/* Achievements */}
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

              {/* Activities and Societies */}
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
      
      {/* Bottom spacing to avoid navbar footer */}
      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
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
  aboutText: {
    lineHeight: 22,
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
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  achievementText: {
    marginLeft: 8,
    flex: 1,
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
  bottomSpacing: {
    height: 32,
  },
});

export default ProfileScreen; 