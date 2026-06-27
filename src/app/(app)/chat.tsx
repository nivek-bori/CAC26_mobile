import { ChatBar, SecondaryBarTypes } from "@/components/chat/ChatBar";
import { ChatMessages } from "@/components/chat/ChatMessages";
import { HomeMessage } from "@/components/HomeMessage";
import { clr } from "@/lib/styles";
import { TemporaryChatMessage } from "@/lib/types";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function ChatPage() {
  // TOOD: load messages from data component

  // const messages: TemporaryChatMessage[] = [
  //   { role: 'user', msg: 'What do I do with plastic bottles?' },
  //   { role: 'ai', msg: 'Plastic bottles can usually be recycled in your curbside bin. Make sure to rinse them out first!' },
  //   { role: 'user', msg: 'Can I recycle pizza boxes?' },
  //   { role: 'ai', msg: 'If the pizza box is clean and free of food grease, it can be recycled. Otherwise, put it in the trash.' },
  // ];
  const messages: TemporaryChatMessage[] = [];
  
  const isNewChat = messages && messages.length == 0;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {isNewChat ? (
          <HomeMessage message="Start by uploading an image or asking a question about your area's trash/recycling code" />
        ) : (
          <ChatMessages messages={messages} />
        )}
      </View>

      <View style={styles.chatBarContainer}>
        <ChatBar
          displayNewChatButton={isNewChat}
          secondaryBarType={isNewChat ? 'tips' : 'chat_options'}
          onUploadImage={() => { }}
          onPressSend={() => { }}
          onPressNewChat={() => { }}
          // TODO: add these functions
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: clr.white,
  },
  contentContainer: {
    flex: 1,
  },
  chatBarContainer: {
    flexShrink: 0,
  },
});