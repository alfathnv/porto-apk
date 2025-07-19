import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image, ScrollView, Pressable, Animated, Text } from 'react-native';
import landingImg from '../../assets/landing.png';
import BlurredPressableBox from '../components/BlurredPressableBox';
import HomeHeader from '../components/HomeHeader';
import CategoryFilter from '../components/CategoryFilter';
import { useNavigation } from '@react-navigation/native';
import { dataContent, assetMap } from '../datas/contentList';

const AnimatedPressableBox = ({ image, title, subtitle, id }) => {
  const navigation = useNavigation();
  const animBox = useRef(new Animated.Value(0)).current;
  const animFont = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.parallel([
      Animated.timing(animBox, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animFont, {
        toValue: 1,
        duration: 60,
        useNativeDriver: false,
      }),
    ]).start();
  };
  
  const handlePressOut = () => {
    Animated.parallel([
      Animated.timing(animBox, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animFont, {
        toValue: 0,
        duration: 60,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const overlayOpacity = animBox.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.25],
  });
  
  const imageOpacity = animBox.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 0.6],
  });
  
  const scale = animBox.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.04],
  });

  return (
    <Pressable
      style={styles.contentBox}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => navigation.navigate('ContentDetail', { id, title, subtitle })}
    >
      <Animated.View style={{ flex: 1, width: '100%', height: '100%', transform: [{ scale }] }}>
        <Animated.Image source={image} style={[styles.contentImage, { opacity: imageOpacity }]} />
        <Animated.View style={[styles.brightOverlay, { opacity: overlayOpacity }]} />
        <View style={styles.overlayTextContainer}>
          <Animated.Text
            style={[
              styles.overlayTitle,
              {
                fontSize: animFont.interpolate({
                  inputRange: [0, 1],
                  outputRange: [22, 26],
                }),
              },
            ]}
          >
            {title}
          </Animated.Text>
          <Animated.Text
            style={[
              styles.overlaySubtitle,
              {
                fontSize: animFont.interpolate({
                  inputRange: [0, 1],
                  outputRange: [16, 19],
                }),
              },
            ]}
          >
            {subtitle}
          </Animated.Text>
        </View>
      </Animated.View>
    </Pressable>
  );
};

const HomeRoute = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredContent = dataContent.filter((item) => {
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      (item.category && item.category === selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

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
          {filteredContent.length > 0 ? (
            filteredContent.map((item) => {
              if (item.isArtProject) {
                // Art projects - show full image, not clickable
                return (
                  <View key={item.id} style={styles.artBox}>
                    <Image 
                      source={assetMap[item.path]} 
                      style={styles.artImage}
                      resizeMode="contain"
                    />
                  </View>
                );
              } else if (item.released) {
                // Regular projects - clickable with animation
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
                // Unreleased projects - blurred
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
          <Image source={landingImg} style={styles.landingImageInScroll} />
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
  contentBox: {
    width: '100%',
    height: 160,
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
  contentImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  overlayTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  overlayTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  overlaySubtitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 2,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  brightOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 8,
    zIndex: 1,
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
  artOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 8,
    zIndex: 1,
  },
  artTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  artSubtitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 4,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
});

export default HomeScreen; 