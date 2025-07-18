import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Modal,
  Image,
  Pressable,
} from 'react-native';
import BoxDetailContent from '../components/BoxDetailContent';
import { dataContent, assetMap } from '../datas/contentList';

const ContentDetailScreen = ({ route }) => {
  const { id } = route.params;
  const content = dataContent.find(item => item.id === id);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    console.log('Gambar dipilih:', image); // Debug log
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  if (!content) return null;

  return (
    <>
      <ScrollView
        style={{ backgroundColor: '#222323' }}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.content}>
          {content.children &&
            content.children.map((child, idx) => (
              <BoxDetailContent
                key={idx}
                image={assetMap[child.image]}
                description={child.description}
                onImagePress={() => openModal(assetMap[child.image])}
              />
            ))}
        </View>
      </ScrollView>

      <Modal visible={modalVisible} transparent={true}>
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
    </>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    backgroundColor: '#222323',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
