import React, { useState, useRef } from 'react';
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
  const [layoutHeight, setLayoutHeight] = useState(SCREEN_HEIGHT);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 60 }).current;
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }).current;

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  if (!content || !content.children) return null;

  const currentChild = content.children[currentIndex] || content.children[0];
  const backgroundImage = assetMap[currentChild.image];

  return (
    <>
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <Image
          source={backgroundImage}
          style={styles.backgroundImage}
          blurRadius={16}
          resizeMode="cover"
        />
        <View style={styles.backgroundOverlay} />
      </View>

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
        style={{ backgroundColor: 'transparent' }}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
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
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(20,20,20,0.7)',
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
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
    width: '100%',
    height: '100%',
  },
});

export default ContentDetailScreen;
