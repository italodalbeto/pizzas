import {View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require('@/assets/images/pizza.webp');

export default function EdtImage() {
  return (
   <View style={styles.container}>
     <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
     </View>
   </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",

  },
});