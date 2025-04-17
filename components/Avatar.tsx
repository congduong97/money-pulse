import { Colors } from "@/constants/color";
import { SIZE } from "@/constants/helper";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface AvatarProps {
  size?: number;
  uri?: string;
  name?: string;
}

const avatarSize = (value: number) => {
  return {
    width: SIZE.heightPixel(value),
    height: SIZE.heightPixel(value),
    borderRadius: SIZE.heightPixel(value / 2),
  };
};

const Avatar = ({ size, uri, name }: AvatarProps) => {
  const [error, setError] = useState(false);

  return (
    <View style={[styles.container, avatarSize(size || 64)]}>
      {error ? (
        <Image
          source={{ uri }}
          resizeMode="cover"
          style={avatarSize(size || 64)}
          onError={(e) => {
            setError(true);
          }}
        />
      ) : (
        <Text style={styles.name}>{name || "user"}</Text>
      )}
    </View>
  );
};

export default Avatar;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0A3089",
    justifyContent:'center',
    alignItems:'center',
    elevation:12
  },
  name:{
    color:Colors.dark.white,
    fontWeight:'600',
    fontSize:SIZE.fontPixel(16)
  }
});
