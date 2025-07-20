import React from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import { useTheme } from 'react-native-paper';
import { personalData, skills, education } from '../datas/profileList';
import InfoCard from '../components/InfoCard';
import ContactCard from '../components/ContactCard';
import AboutCard from '../components/AboutCard';
import SkillCard from '../components/SkillCard';
import EducationCard from '../components/EducationCard';

const ProfileScreen = () => {
  const theme = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.contentContainer}>
        <InfoCard personalData={personalData} />
        <ContactCard personalData={personalData} />
        <AboutCard personalData={personalData} />
        <SkillCard skills={skills} />
        <EducationCard education={education} />
        <View style={styles.bottomSpacing} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    ...(Platform.OS === 'web' && {
      maxWidth: 480,
      alignSelf: 'center',
      width: '100%',
    }),
  },
  bottomSpacing: {
    height: 32,
  },
});

export default ProfileScreen; 