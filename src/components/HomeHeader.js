import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { categories, dataContent } from '../datas/contentList';

const HomeHeader = ({ onSearch, searchQuery, setSearchQuery }) => {
  // Calculate skills count from categories (excluding 'all')
  const skillsCount = categories.filter(cat => cat.id !== 'all').length;
  
  // Calculate projects count from dataContent
  const projectsCount = dataContent.length;

  return (
    <View style={styles.header}>
      {/* Greeting Section */}
      <View style={styles.greetingSection}>
        <Text style={styles.greeting}>Hello, you can call me Rio! 👋</Text>
        <Text style={styles.subtitle}>Welcome to my portfolio</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons name="magnify" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search projects..."
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={() => onSearch && onSearch(searchQuery)}
        />
        {searchQuery.length > 0 && (
          <IconButton
            icon="close"
            size={16}
            onPress={() => setSearchQuery('')}
            style={styles.clearButton}
          />
        )}
      </View>

      {/* Quick Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{projectsCount}</Text>
          <Text style={styles.statLabel}>Projects</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{skillsCount}</Text>
          <Text style={styles.statLabel}>Skills</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>3+</Text>
          <Text style={styles.statLabel}>Years</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: '#222323',
  },
  greetingSection: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2b2b',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 44,
    color: '#fff',
    fontSize: 16,
  },
  clearButton: {
    margin: 0,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2a2b2b',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#333',
    height: 30,
  },
});

export default HomeHeader; 