import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  withSequence,
  withDelay,
} from "react-native-reanimated";

interface Props {
  value: number;
  style?: any;
  duration?: number;
  delay?: number;
}

export default function AnimatedNumber({
  value,
  style,
  duration = 1000,
  delay = 0,
}: Props) {
  const digits = value
    .toFixed(2)
    .split("")
    .filter((char) => char !== ".");
  const decimalPosition = value.toFixed(2).indexOf(".");

  return (
    <View style={styles.container}>
      {digits.map((digit, index) => (
        <React.Fragment key={index}>
          <AnimatedDigit
            digit={digit}
            delay={delay + (index * duration) / digits.length}
            style={style}
          />
          {index === decimalPosition - 1 && <Text style={style}>.</Text>}
        </React.Fragment>
      ))}
    </View>
  );
}

function AnimatedDigit({
  digit,
  delay,
  style,
}: {
  digit: string;
  delay: number;
  style?: any;
}) {
  const translateY = useSharedValue(50);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateY.value = withDelay(
      delay,
      withSequence(withTiming(0, { duration: 300 }))
    );
    opacity.value = withDelay(delay, withTiming(1, { duration: 300 }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    };
  });

  return <Animated.Text style={[style, animatedStyle]}>{digit}</Animated.Text>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
