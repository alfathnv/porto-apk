import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { categories } from '../datas/contentList';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.selectedCategory
            ]}
            onPress={() => onCategoryChange(category.id)}
            activeOpacity={0.7}
          >
            <MaterialCommunityIcons
              name={category.icon}
              size={20}
              color={selectedCategory === category.id ? '#fff' : '#666'}
            />
            <Text style={[
              styles.categoryText,
              selectedCategory === category.id && styles.selectedCategoryText
            ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#222323',
    ...(Platform.OS === 'web' && {
      maxWidth: 480,
      alignSelf: 'center',
      width: '100%',
    }),
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  scrollContent: {
    paddingRight: 24,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2b2b',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  selectedCategory: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  categoryText: {
    color: '#666',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 6,
  },
  selectedCategoryText: {
    color: '#fff',
  },
});

export default CategoryFilter; 