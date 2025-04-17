import { StyleSheet, View, ViewProps } from "react-native";
import { Colors } from "@/constants/color";
import { SIZE } from "@/constants/helper";

interface SpaceProps extends ViewProps {
  width?: number;
  height?: number;
  opacity?: number;
}

const Space = ({ width, height, opacity, ...rest }: SpaceProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: SIZE.widthPixel(width || 0),
          height: SIZE.heightPixel(height || 0),
          opacity,
        },
      ]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: 1,
    backgroundColor: Colors.dark.transparent,
    opacity: 1,
  },
});

export default Space;
