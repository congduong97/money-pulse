import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Colors } from "@/utils/color";
import { Size } from "@/utils/helper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+84");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // Here you would implement your phone authentication logic
      // For example, using Firebase Phone Auth or your backend service
      console.log("Logging in with:", countryCode + phoneNumber);

      // Navigate to verification screen
      router.push("/verify");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <StatusBar style="dark" />

          <View style={styles.header}>
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.phoneInputContainer}>
              <TouchableOpacity style={styles.countryCode}>
                <Text style={styles.countryCodeText}>{countryCode}</Text>
              </TouchableOpacity>

              <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                maxLength={10}
                onSubmitEditing={handleLogin}
              />
            </View>

            <TouchableOpacity
              style={[
                styles.button,
                // (!phoneNumber || isLoading) && styles.buttonDisabled,
              ]}
              onPress={handleLogin}
              // disabled={!phoneNumber || isLoading}
            >
              <Text style={styles.buttonText}>
                {isLoading ? "Sending code..." : "Continue"}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.white,
    padding: Size.widthPixel(16),
  },
  header: {
    marginTop: Size.heightPixel(16),
    marginBottom: Size.widthPixel(40),
  },
  title: {
    fontSize: Size.fontPixel(32),
    fontWeight: "bold",
    color: Colors.dark.text,
    marginBottom: Size.widthPixel(8),
  },
  subtitle: {
    fontSize: Size.fontPixel(16),
    color: Colors.dark.textSubtle,
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: Size.fontPixel(14),
    fontWeight: "600",
    color: Colors.dark.text,
    marginBottom: Size.widthPixel(8),
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Size.widthPixel(24),
  },
  countryCode: {
    paddingVertical: Size.heightPixel(16),
    paddingHorizontal: Size.widthPixel(12),
    backgroundColor: Colors.dark.backgroundLight,
    borderRadius: Size.borderRadius,
    marginRight: Size.widthPixel(8),
  },
  countryCodeText: {
    fontSize: Size.fontPixel(16),
    fontWeight: "600",
    color: Colors.dark.text,
  },
  input: {
    flex: 1,
    height: Size.heightPixel(52),
    backgroundColor: Colors.dark.backgroundLight,
    borderRadius: Size.borderRadius,
    paddingHorizontal: Size.widthPixel(16),
    fontSize: Size.fontPixel(16),
    color: Colors.dark.text,
  },
  button: {
    height: Size.heightPixel(52),
    backgroundColor: Colors.dark.primary,
    borderRadius: Size.borderRadius,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: Colors.dark.white,
    fontSize: Size.fontPixel(16),
    fontWeight: "600",
  },
});
