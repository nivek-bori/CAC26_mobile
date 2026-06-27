import { clr } from "@/lib/styles";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ChatOptionsProps = {
  displayNewChatButton: boolean;
  onPressNewChat: () => void;
};

export function ChatOptions({
  displayNewChatButton,
  onPressNewChat,
}: ChatOptionsProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {displayNewChatButton && <OptionButton label="new chat" onPress={onPressNewChat} />}
      <OptionButton label="open chat history" onPress={() => router.push('/(app)/history')} />
 
    </View>
  );
}

function OptionButton({
  label,
  onPress,
}: {
  label: 'new chat' | 'open chat history';
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginBottom: 13,
  },
  button: {
    flex: 1,
    minHeight: 34,
    borderRadius: 18,
    backgroundColor: clr.gray_light,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: clr.gray_dark,
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "center",
  },
});
