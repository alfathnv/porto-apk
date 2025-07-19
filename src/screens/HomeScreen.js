import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, Text } from 'react-native';
import BlurredPressableBox from '../components/BlurredPressableBox';
import AnimatedPressableBox from '../components/AnimatedPressableBox';
import HomeHeader from '../components/HomeHeader';
import CategoryFilter from '../components/CategoryFilter';
import { dataContent, assetMap } from '../datas/contentList';
import { Image as CachedImage } from "react-native-expo-image-cache";



const HomeRoute = () => {
  const PAGE_SIZE = 8;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [searchQuery, selectedCategory]);

  const filteredContent = dataContent.filter((item) => {
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      (item.category && item.category === selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  const displayedContent = filteredContent.slice(0, visibleCount);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        onScroll={({ nativeEvent }) => {
          const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;
          const paddingToBottom = 100;
          const isCloseToBottom =
            layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
        
          if (isCloseToBottom && visibleCount < filteredContent.length) {
            setVisibleCount((prev) => prev + PAGE_SIZE);
          }
        }}
        scrollEventThrottle={16}
      >
        <HomeHeader 
          onSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <View style={styles.content}>
          {displayedContent.length > 0 ? (
            displayedContent.map((item) => {
              if (item.isArtProject) {
                return (
                  <View key={item.id} style={styles.artBox}>
                    <CachedImage
                      uri={Image.resolveAssetSource(assetMap[item.path]).uri}
                      style={styles.artImage}
                      resizeMode="contain"
                    />
                  </View>
                );
              } else if (item.released) {
                return (
                  <AnimatedPressableBox
                    key={item.id}
                    image={assetMap[item.path]}
                    title={item.title}
                    subtitle={item.subtitle}
                    id={item.id}
                  />
                );
              } else {
                return (
                  <BlurredPressableBox
                    key={item.id}
                    image={assetMap[item.path]}
                    title={item.title}
                    subtitle={item.subtitle}
                    id={item.id}
                    disableNavigate={true}
                  />
                );
              }
            })
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>
                No Projects Found
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <HomeRoute />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222323',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 24,
  },
  landingImageInScroll: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginTop: 24,
    alignSelf: 'center',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyStateText: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
  },
  artBox: {
    width: '100%',
    height: 300,
    backgroundColor: '#2a2b2b',
    borderRadius: 12,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  artImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});

export default HomeScreen; 