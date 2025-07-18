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

  const [layoutHeight, setLayoutHeight] = useState(SCREEN_HEIGHT); // dynamically measured height

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
    <>
      <FlatList
        data={content.children}
        keyExtractor={(_, idx) => idx.toString()}
        onLayout={(e) => {
          const height = e.nativeEvent.layout.height;
          setLayoutHeight(height);
        }}
        renderItem={({ item }) => (
          <View style={[styles.page, { height: layoutHeight }]}>
            <View style={styles.innerContentWrapper}>
              <BoxDetailContent
                image={assetMap[item.image]}
                description={item.description}
                onImagePress={() => openModal(assetMap[item.image])}
              />
            </View>
          </View>
        )}
        pagingEnabled
        snapToInterval={layoutHeight}
        getItemLayout={(_, index) => ({
          length: layoutHeight,
          offset: layoutHeight * index,
          index,
        })}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        style={{ backgroundColor: '#222323' }} // Important: use style, not contentContainerStyle
      />

      <Modal visible={modalVisible} transparent>
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
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222323',
    paddingHorizontal: 24,
  },
  innerContentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
