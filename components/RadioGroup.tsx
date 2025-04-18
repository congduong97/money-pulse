import { Colors } from "@/utils/color";
import { Size } from "@/utils/helper";
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";

export interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  style?: ViewStyle;
}

export const RadioGroup = ({ options, value, onChange, style }: RadioGroupProps) => {
  
  return (
    <View style={[styles.container, style]}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.option}
          onPress={() => onChange(option.value)}
        >
          <View style={styles.radio}>
            {value === option.value && <View style={styles.selected} />}
          </View>
          <Text style={styles.label}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: Size.heightPixel(12),
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: Size.widthPixel(8),
  },
  radio: {
    width: Size.heightPixel(20),
    height: Size.heightPixel(20),
    borderRadius: Size.heightPixel(10),
    borderWidth: 2,
    borderColor: Colors.dark.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    width: Size.heightPixel(12),
    height: Size.heightPixel(12),
    borderRadius: Size.heightPixel(6),
    backgroundColor: Colors.dark.primary,
  },
  label: {
    fontSize: Size.fontPixel(14),
    color: Colors.dark.text,
  },
});
