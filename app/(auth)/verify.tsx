import React, { useState, useRef } from "react";
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

export default function VerifyScreen() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto-focus next input
    if (text.length === 1 && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    router.push("/(tabs)");
    setIsLoading(true);
    try {
      const verificationCode = code.join("");
      console.log("Verifying code:", verificationCode);

      // Here you would implement your verification logic
      // For example, using Firebase Phone Auth or your backend service

      // Navigate to main app after successful verification
      router.replace("/(tabs)");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <StatusBar style="dark" />

        <View style={styles.header}>
          <Text style={styles.title}>Verify Phone</Text>
          <Text style={styles.subtitle}>Enter the code we sent you</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.codeContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.codeInput}
                maxLength={1}
                keyboardType="number-pad"
                value={digit}
                onChangeText={(text) => handleCodeChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            ))}
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              (!code.every((digit) => digit) || isLoading) &&
                styles.buttonDisabled,
            ]}
            onPress={handleVerify}
            // disabled={!code.every((digit) => digit) || isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? "Verifying..." : "Verify"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.resendButton}
            onPress={() => {
              // Implement resend logic here
              console.log("Resending code...");
            }}
          >
            <Text style={styles.resendText}>Resend Code</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  form: {
    flex: 1,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  codeInput: {
    width: 50,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#F5F5F5",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    height: 52,
    backgroundColor: "#007AFF",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  resendButton: {
    alignItems: "center",
  },
  resendText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
