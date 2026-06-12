import { View, StyleSheet } from 'react-native';
import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';

const PlaceholderImage = require('@/assets/images/pizza.webp');

export default function EdtImage() {
const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
const [showAppOptions, setShowAppOpions] = useState<boolean>(false);

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
     alert('You did not select any image.');
  }
};
 const onReset = () => {
   setShowAppOpions(false);
 };

  const onAddSticker = () => {

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
        <Button theme="primary" label="escolha uma foto" />
        <Button label="use a foto" onPress={()  => setShowAppOpions(true)} />
      </View>
      )}
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
 
  },
});
