import { Dimensions, PixelRatio, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");

//iPhone-11
export const DESIGN_WIDTH = 414;
export const DESIGN_HEIGHT = 896;

const widthBaseScale = SCREEN_WIDTH / DESIGN_WIDTH;
const heightBaseScale = SCREEN_HEIGHT / DESIGN_HEIGHT;

function normalize(size: number, based = "width") {
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
const widthPixel = (size: number) => {
  return normalize(size, "width");
};
//for height  pixel
const heightPixel = (size: number) => {
  return normalize(size, "height");
};
//for font  pixel
const fontPixel = (size: number) => {
  return heightPixel(size);
};

export const Size = {
  widthPixel,
  heightPixel,
  fontPixel,
  borderRadius: widthPixel(16),
};

export const hitSlop = (number: number) => ({
  top: Size.widthPixel(number),
  left: Size.widthPixel(number),
  right: Size.widthPixel(number),
  bottom: Size.widthPixel(number),
});

export const isIos = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

export const takePhoto = async (
  params: ImagePicker.ImagePickerOptions = {}
) => {
  try {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    
    if (!permission.granted) return null;
    const result = await ImagePicker.launchCameraAsync(params);

    if (!result.canceled) {
      return result.assets[0];
    }
  } catch (err) {
    return null;
  }
};

export const pickFromGallery = async (
  params: ImagePicker.ImagePickerOptions = {}
) => {
  try {
     const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return null;
    const result = await ImagePicker.launchImageLibraryAsync(params);

    if (!result.canceled) {
      return result.assets[0];
    }
  } catch (err) {
    return null;
  }
};
