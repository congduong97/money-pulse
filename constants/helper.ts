import { Dimensions, PixelRatio, Platform } from "react-native";

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

export const SIZE = {
  widthPixel,
  heightPixel,
  fontPixel,
  borderRadius: widthPixel(12),
};

export const hitSlop = (number: number) => ({
  top: SIZE.widthPixel(number),
  left: SIZE.widthPixel(number),
  right: SIZE.widthPixel(number),
  bottom: SIZE.widthPixel(number),
});

export const isIos = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
