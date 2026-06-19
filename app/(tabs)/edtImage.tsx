import { ImageSourcePropType, View, StyleSheet } from 'react-native';
import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';
import EmojiPicker from '@/components/EmojiPiker';
import EmojiList from '@/components/EmojiList';


const PlaceholderImage = require('@/assets/images/pizza.webp');

export default function EdtImage() {
const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
const [showAppOptions, setShowAppOpions] = useState<boolean>(false);
const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
const [pickedEmoji, setPikerdEmoji] = useState<ImageSourcePropType | undefined>(undefined);
 

const pickImageAsync = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ['images'],
     allowsEditing: true,
     quality: 1,
  });

  if (!result.canceled) {
    setSelectedImage(result.assets[0].uri);
    setShowAppOpions(true);
  } else {
     alert('Você não selecionou nenhuma imagem.');
  }
};
 const onReset = () => {
   setShowAppOpions(false);
 };

  const onAddSticker = () => {
     setIsModalVisible(true);
  };

  const onModalClose = () => {
     setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {

  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
       </View>
      {showAppOptions? (
    <View style={styles.optionsContainer}>
      <View style={styles.optionsRow}>
       <IconButton icon="refresh" label="Reset" onPress={onReset} />
        <CircleButton onPress={onAddSticker} />
        <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
      </View>
      </View>
      ) : (
      <View style={styles.footerContainer}>
        <Button theme="primary" label="escolha uma foto" onPress={pickImageAsync} />
        <Button label="use a foto" onPress={()  => setShowAppOpions(true)} />
      </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPikerdEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },

  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
