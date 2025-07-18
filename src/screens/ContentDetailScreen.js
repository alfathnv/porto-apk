import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import BoxDetailContent from '../components/BoxDetailContent';
import { assetMap } from '../datas/contentList';

const ContentDetailScreen = ({ route, navigation }) => {
  const { id, title, subtitle } = route.params;

  useEffect(() => {
    if (title && subtitle) {
      navigation.setOptions({ title: `${title} - ${subtitle}` });
    }
  }, [navigation, title, subtitle]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <BoxDetailContent
        image={assetMap['assemblr_metaverse_2.png']}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi."
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingTop: 24,
    paddingBottom: 32,
    backgroundColor: '#18191a',
    minHeight: '100%',
  },
});

export default ContentDetailScreen; 