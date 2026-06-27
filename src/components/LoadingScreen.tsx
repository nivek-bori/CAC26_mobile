import { clr } from "@/lib/styles";
import { Trash } from "lucide-react-native";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";

const defaultMessages = [
  "Sorting this out...",
  "Checking local recycling rules...",
  "Finding the right bin...",
  "Reading disposal guidance...",
  "Separating trash from recycling...",
];

type LoadingScreenProps = {
  messages?: string[];
  intervalMs?: number;
};

export function LoadingScreen({
  messages = defaultMessages,
  intervalMs = 2500,
}: LoadingScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const pulse = useRef(new Animated.Value(0)).current;
  const safeMessages = messages.length > 0 ? messages : defaultMessages;

  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex((currentIndex) => (currentIndex + 1) % safeMessages.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [intervalMs, safeMessages.length]);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1,
          duration: 900,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 0,
          duration: 900,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    return () => animation.stop();
  }, [pulse]);

  const iconScale = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.15],
  });

  const iconOpacity = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [0.55, 1.2],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.iconContainer,
          {
            opacity: iconOpacity,
            transform: [{ scale: iconScale }],
          },
        ]}
      >
        <Trash color={clr.black} size={70} strokeWidth={1.8} />
      </Animated.View>

      <Text style={styles.message}>{safeMessages[messageIndex]}</Text>
      <Text style={styles.subtext}>Compiling local trash and recycling guidance</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 36,
    backgroundColor: clr.white,
  },
  iconContainer: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: clr.green_light,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 45,
  },
  message: {
    color: clr.black,
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 36,
    textAlign: "center",
    marginBottom: 18,
  },
  subtext: {
    color: clr.gray_dark,
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
});
