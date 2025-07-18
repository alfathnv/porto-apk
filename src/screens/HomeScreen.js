import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Pressable, Animated } from 'react-native';
import { Appbar, Title, Button, BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SocialScreen from './SocialScreen';
import { useRef } from 'react';
import landingImg from '../../assets/landing.png';
import BlurredPressableBox from '../components/BlurredPressableBox';
import { useNavigation } from '@react-navigation/native';

const AnimatedPressableBox = ({ image, title, subtitle, id }) => {
  const navigation = useNavigation();
  const animBox = useRef(new Animated.Value(0)).current; // for scale/opacity
  const animFont = useRef(new Animated.Value(0)).current; // for fontSize/color

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
                color: animFont.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['#fff', '#fff'],
                }),
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
                color: animFont.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['#fff', '#fff'],
                }),
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

const HomeRoute = ({ onLogout }) => (
  <ScrollView contentContainerStyle={styles.scrollContent}>
    <View style={styles.content}>
      <AnimatedPressableBox image={require('../../assets/porto/assemblr_metaverse_1.jpg')} title="Assemblr" subtitle="Metaverse" id={1} />
      <AnimatedPressableBox image={require('../../assets/porto/assemblr_studio_1.jpg')} title="Assemblr" subtitle="Studio" id={2} />
      <AnimatedPressableBox image={require('../../assets/porto/agra_wais_1.png')} title="Agranara" subtitle="WAIS BSI" id={3} />
      <AnimatedPressableBox image={require('../../assets/porto/agate_astra_1.png')} title="Agate" subtitle="Astra Virtueverse" id={4} />
      <AnimatedPressableBox image={require('../../assets/porto/agra_sigi_1.png')} title="Agranara" subtitle="SIGI Mandiri" id={5} />
      <AnimatedPressableBox image={require('../../assets/porto/agate_gebyar_1.jpg')} title="Agate" subtitle="Gebyar BCA" id={6} />
      <AnimatedPressableBox image={require('../../assets/porto/agate_deus_1.png')} title="Agate" subtitle="DEUS HOAFL" id={7} />
      <BlurredPressableBox image={require('../../assets/porto/agate_cpcm_1.png')} title="Agate" subtitle="CPCM MooGotchi" id={8} disableNavigate={true} />
      <BlurredPressableBox image={require('../../assets/porto/agate_pistachio_1.png')} title="Agate" subtitle="MVP Pistachio" id={9} disableNavigate={true} />
      <Image source={landingImg} style={styles.landingImageInScroll} />
    </View>
  </ScrollView>
);

const SocialsRoute = () => (
  <SocialScreen />
);

const ProfileRoute = () => (
  <View style={styles.content}>
    <Text style={styles.title}>Profile Page (Coming Soon)</Text>
  </View>
);

const HomeScreen = ({ onLogout }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home-variant' },
    { key: 'socials', title: 'Socials', icon: 'web' },
    { key: 'profile', title: 'Profile', icon: 'account' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'home':
        return <HomeRoute onLogout={onLogout} />;
      case 'socials':
        return <SocialsRoute />;
      case 'profile':
        return <ProfileRoute />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderScene({ route: routes[index] })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222323',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    marginBottom: 32,
    fontSize: 24,
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 16,
  },
  bottomBar: {
    backgroundColor: '#2a2b2b',
  },
  socialBox: {
    backgroundColor: '#2a2b2b',
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
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
  contentText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  contentImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  overlayText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    zIndex: 2,
    display: 'flex',
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
    display: 'flex',
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
  devLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default HomeScreen; 