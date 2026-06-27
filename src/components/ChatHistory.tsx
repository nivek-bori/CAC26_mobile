import { clr } from "@/lib/styles";
import { TemporaryChat } from "@/lib/types";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type ChatHistoryProps = {
  location: string;
  chats: TemporaryChat[];
  onPressBack?: () => void;
  onPressChat: (chat: TemporaryChat) => void;
};

export function ChatHistory({
  location,
  chats,
}: ChatHistoryProps) {
  const router = useRouter();

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Pressable
        accessibilityLabel="Go back"
        accessibilityRole="button"
        hitSlop={12}
        onPress={() => {
          if (router.canGoBack()) {
            router.back();
          } else {
            router.replace("/chat");
          }
        }}
        style={({ pressed }) => [
          styles.backButton,
          pressed && styles.backButtonPressed,
        ]}
      >
        <ArrowLeft color={clr.gray_dark} size={34} strokeWidth={2.5} />
      </Pressable>

      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>
          Currently Using <Text style={styles.locationName}>{location}</Text>
        </Text>
        <Text style={styles.locationText}>Trash/Recycling Code</Text>
      </View>

      <Text style={styles.heading}>Previous Chats:</Text>

      <View style={styles.chatList}>
        {chats.length > 0 ? (
          chats.map((chat) => (
            <Pressable
              accessibilityRole="button"
              key={chat.id}
              onPress={() => { router.push(`/chat?id=${chat.id}`); }}
              style={({ pressed }) => [
                styles.chatItem,
                pressed && styles.chatItemPressed,
              ]}
            >
              <Text numberOfLines={2} style={styles.chatName}>
                {chat.name}
              </Text>
            </Pressable>
          ))
        ) : (
          <Text style={styles.emptyText}>No previous chats yet.</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingHorizontal: 44,
    paddingTop: 42,
    paddingBottom: 32,
    backgroundColor: clr.white,
  },
  backButton: {
    width: 44,
    height: 44,
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 34,
  },
  backButtonPressed: {
    opacity: 0.55,
  },
  locationContainer: {
    marginBottom: 50,
  },
  locationText: {
    color: clr.gray_dark,
    fontSize: 26,
    lineHeight: 31,
    textAlign: "center",
  },
  locationName: {
    color: clr.gray_dark,
    fontWeight: "800",
  },
  heading: {
    color: clr.black,
    fontSize: 30,
    fontWeight: "900",
    lineHeight: 42,
    marginBottom: 30,
  },
  chatList: {
    gap: 25,
  },
  chatItem: {
    alignSelf: "flex-start",
    maxWidth: "100%",
  },
  chatItemPressed: {
    opacity: 0.55,
  },
  chatName: {
    color: clr.black,
    fontSize: 25,
    lineHeight: 34,
  },
  emptyText: {
    color: clr.gray_dark,
    fontSize: 20,
    lineHeight: 28,
  },
});
