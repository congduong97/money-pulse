import { Colors } from "../utils/color";
import { pickFromGallery, Size, takePhoto } from "../utils/helper";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Select from "./Select";
import { ImagePickerAsset } from "expo-image-picker";
import * as ImagePicker from "expo-image-picker";

interface AvatarProps {
  size?: number;
  uri?: string;
  name?: string;
}

const avatarSize = (value: number) => {
  return {
    width: Size.heightPixel(value),
    height: Size.heightPixel(value),
    borderRadius: Size.heightPixel(value / 2),
  };
};

type PickerOptionType = "camera" | "gallery";

const Avatar = ({ size, uri, name }: AvatarProps) => {
  const [error, setError] = useState(false);
  const [image, setImage] = useState<ImagePickerAsset | null>(null);
  const [loading, setLoading] = useState(false);
  const [pickerOption, setPickerOption] = useState<PickerOptionType>();

  useEffect(() => {
    if (pickerOption) {
      selectImage(pickerOption);
    }
  }, [pickerOption]);

  const selectImage = (type: PickerOptionType) => {
    const option = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3] as [number, number],
      quality: 1,
    };
    const asset =
      type === "camera" ? takePhoto(option) : pickFromGallery(option);
  };

  return (
    <View style={[styles.container, avatarSize(size || 58)]}>
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
      <View style={styles.edit}>
        <Select
          options={[
            { label: "Take a photo", value: "camera" },
            { label: "Select from gallery", value: "gallery" },
          ]}
          title="Image picker"
          onChangeValue={(option) => {
            setPickerOption(option.value as PickerOptionType);
          }}
          controller={
            <Ionicons
              name="arrow-down-outline"
              size={Size.fontPixel(12)}
              color={Colors.dark.white}
            />
          }
        />
      </View>
    </View>
  );
};

export default Avatar;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0A3089",
    justifyContent: "center",
    alignItems: "center",
    elevation: 12,
  },
  name: {
    color: Colors.dark.white,
    fontWeight: "600",
    fontSize: Size.fontPixel(16),
  },
  edit: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#0B73F7",
    padding: Size.heightPixel(4),
    borderRadius: Size.heightPixel(100),
    borderWidth: 2,
    borderColor: Colors.dark.white,
    transform: [{ rotate: "-120deg" }],
  },
});
