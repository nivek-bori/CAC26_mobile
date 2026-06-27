import { clr } from "@/lib/styles";
import { TemporaryChatMessage } from "@/lib/types";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type ChatMessagesProps = {
  messages: TemporaryChatMessage[];
};

export function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false} // TODO: decide yes or no
    >
      {messages.map((message, index) =>
        message.role === "user" ? (
          <UserMessage key={`${message.role}-${index}`} msg={message.msg} />
        ) : (
          <AiMessage key={`${message.role}-${index}`} msg={message.msg} />
        ),
      )}
    </ScrollView>
  );
}

function UserMessage({ msg }: { msg: string }) {
  return (
    <View style={styles.userRow}>
      <View style={styles.userBubble}>
        <Text style={styles.userText}>{msg}</Text>
      </View>
    </View>
  );
}

function AiMessage({ msg }: { msg: string }) {
  return (
    <View style={styles.aiBlock}>
      <Text style={styles.aiLabel}>AI:</Text>
      <Text style={styles.aiText}>{msg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingLeft: 34,
    paddingRight: 30,
    paddingTop: 70,
    paddingBottom: 28,
  },
  userRow: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 30,
  },
  userBubble: {
    maxWidth: "78%", // TODO: configure
    borderRadius: 28,
    backgroundColor: clr.green_light,
    paddingHorizontal: 26,
    paddingVertical: 16,
  },
  userText: {
    color: clr.black,
    fontSize: 18,
    lineHeight: 28,
    textAlign: "center",
  },
  aiBlock: {
    width: "100%",
    marginBottom: 42,
  },
  aiLabel: {
    color: clr.black,
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 24,
    marginBottom: 6,
  },
  aiText: {
    color: clr.black,
    fontSize: 18,
    lineHeight: 27,
  },
});
