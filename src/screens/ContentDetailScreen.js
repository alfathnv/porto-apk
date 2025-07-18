import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import BoxDetailContent from '../components/BoxDetailContent';
import { dataContent, assetMap } from '../datas/contentList';

const ContentDetailScreen = ({ route }) => {
  const { id } = route.params;
  const content = dataContent.find(item => item.id === id);

  if (!content) return null;

  return (
    <ScrollView
      style={{ backgroundColor: '#222323' }}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.content}>
        {content.children && content.children.map((child, idx) => (
          <BoxDetailContent
            key={idx}
            image={assetMap[child.image]}
            description={child.description}
          />
        ))}
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    backgroundColor: '#222323',
    minHeight: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
});

export default ContentDetailScreen; 