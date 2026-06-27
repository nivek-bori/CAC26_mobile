import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export async function getImageURIFromUser() {
  const permission = await ImagePicker.requestCameraPermissionsAsync();

  if (!permission.granted) {
    Alert.alert(
      "Camera permission needed",
      "TrashAI needs camera access so you can take a photo of an item."
    );
    return;
  }

  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    quality: 0.7,
  });

  if (result.canceled) return;

  const image = result.assets[0];

  return image.uri;
}