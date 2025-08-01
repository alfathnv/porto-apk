import React from 'react';
import { View, StyleSheet, Image, Platform } from 'react-native';
import { Text, useTheme, Button } from 'react-native-paper';

const InfoCard = ({ personalData }) => {
  const theme = useTheme();
  
  // Use fixed sizes for better consistency across platforms
  const photoSize = Platform.OS === 'web' ? 120 : 96;
  const nameFontSize = Platform.OS === 'web' ? 20 : Math.max(photoSize * 0.15, 18);
  const titleFontSize = Platform.OS === 'web' ? 16 : Math.max(photoSize * 0.12, 14);
  const locationFontSize = Platform.OS === 'web' ? 14 : Math.max(photoSize * 0.1, 12);

  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/photo.jpeg')}
        style={[styles.profileImage, { width: photoSize, height: photoSize, borderRadius: photoSize / 2 }]}
      />
      <View style={styles.headerInfo}>
        <Text style={[styles.name, { color: theme.colors.onBackground, fontSize: nameFontSize }]}>
          {personalData.name}
        </Text>
        <Text style={[styles.title, { color: theme.colors.primary, fontSize: titleFontSize }]}>
          {personalData.title}
        </Text>
        <Text style={[styles.title, { color: theme.colors.primary, fontSize: titleFontSize }]}>
          {personalData.subtitle}
        </Text>
        <Text style={[styles.location, { color: theme.colors.onSurfaceVariant, fontSize: locationFontSize }]}>
          📍 {personalData.location}
        </Text>
        {personalData.resume && (
          <Button
            mode="outlined"
            icon="file-document-outline"
            style={{ marginTop: 8, alignSelf: 'flex-start' }}
            labelStyle={{ fontSize: 14 }}
            onPress={() => {
              // Open link in browser (universal for web/native)
              const url = personalData.resume;
              if (Platform.OS === 'web') {
                window.open(url, '_blank');
              } else {
                import('react-native').then(({ Linking }) => Linking.openURL(url));
              }
            }}
          >
            Lihat Resume / CV
          </Button>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 20,
  },
  profileImage: {
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
});

export default InfoCard; 