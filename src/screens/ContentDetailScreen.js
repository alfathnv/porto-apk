import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Modal,
  Image,
  Pressable,
} from 'react-native';
import BoxDetailContent from '../components/BoxDetailContent';
import { dataContent, assetMap } from '../datas/contentList';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const ContentDetailScreen = ({ route }) => {
  const { id } = route.params;
  const content = dataContent.find(item => item.id === id);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  if (!content || !content.children) return null;

  return (
    <View style={{ backgroundColor: '#222323' }}>
      <FlatList
        data={content.children}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View style={styles.page}>
            <BoxDetailContent
              image={assetMap[item.image]}
              description={item.description}
              onImagePress={() => openModal(assetMap[item.image])}
            />
          </View>
        )}
        pagingEnabled
        snapToInterval={SCREEN_HEIGHT}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        contentContainerStyle={{ backgroundColor: '#222323' }}
      />

      <Modal visible={modalVisible} transparent={true} >
        <Pressable style={styles.modalContainer} onPress={closeModal}>
          {selectedImage && (
            <Image
              source={selectedImage}
              style={styles.fullImage}
              resizeMode="contain"
            />
          )}
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222323',
    padding: 24,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.95)',
    justifyContent: 'center',
    alignItems: 'center',

  },
  fullImage: {
    width: '90%',
    height: '90%',
  },
});

export default ContentDetailScreen;
