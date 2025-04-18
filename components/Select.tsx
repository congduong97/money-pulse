import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Text,
  Modal,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/utils/color";
import { Size } from "@/utils/helper";
import { RadioGroup } from "./RadioGroup";
import Space from "./Space";
import FlexView from "./FlexView";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  onChangeValue: (value: SelectOption) => void;
  value?: SelectOption;
  title?: string;
  controllerStyle?: ViewStyle;
  controller: React.ReactNode;
}

const Select = ({
  options,
  onChangeValue,
  value,
  title,
  controllerStyle,
  controller,
}: SelectProps) => {
  const [selected, setSelected] = useState<string>(value?.value || "");
  const [isVisible, setIsVisible] = useState(false);

  const onCancel = () => setIsVisible(false);
  const onConfirm = () => {
    onCancel();
    const selectedOption = options.find((opt) => opt.value === selected);
    if (selectedOption) onChangeValue(selectedOption);
  };

  useEffect(() => {
    console.log('value',value);
    
    if (!isVisible) setSelected(value?.value || "");
  }, [isVisible, value]);

  return (
    <View>
      <TouchableOpacity
        style={controllerStyle}
        onPress={() => setIsVisible(true)}
      >
        {controller}
      </TouchableOpacity>
      <Modal
        transparent
        visible={isVisible}
        onRequestClose={onCancel}
        animationType="fade"
      >
        <Pressable style={styles.backdrop} onPress={onCancel}>
          <View style={styles.modalContentWrapper}>
            <Pressable>
              <View style={styles.modalContentContainer}>
                <Text style={styles.modalTitle}>{title || "Select Option"}</Text>
                <View style={styles.modalContent}>
                  <RadioGroup
                    options={options}
                    value={selected}
                    onChange={setSelected}
                  />
                </View>
                <View style={styles.modalActionContainer}>
                  <TouchableOpacity onPress={onCancel}>
                    <Text
                      style={[
                        styles.modalActionTxt,
                        { color: Colors.dark.primary },
                      ]}
                    >
                      Cancel
                    </Text>
                  </TouchableOpacity>
                  <Space width={32} />
                  <TouchableOpacity onPress={onConfirm}>
                    <Text
                      style={[
                        styles.modalActionTxt,
                        { color: Colors.dark.primary },
                      ]}
                    >
                      Ok
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContentWrapper: {
    backgroundColor: Colors.dark.white,
    borderTopLeftRadius: Size.widthPixel(16),
    borderTopRightRadius: Size.widthPixel(16),
    overflow: 'hidden',
  },
  modalTitle: {
    fontWeight: "bold",
    color: Colors.dark.text,
    fontSize: Size.fontPixel(24),
    paddingTop: Size.widthPixel(32),
    paddingHorizontal: Size.widthPixel(16),
  },
  modalContentContainer: {
    backgroundColor: Colors.dark.white,
    paddingBottom: Size.widthPixel(32),
  },
  modalContent: {
    padding: Size.widthPixel(16),
  },
  modalActionContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    backgroundColor: Colors.dark.white,
    paddingHorizontal: Size.widthPixel(16),
    paddingVertical: Size.widthPixel(8),
  },
  modalActionTxt: {
    fontSize: Size.fontPixel(16),
    fontWeight: "600",
  },
});

export default Select;
