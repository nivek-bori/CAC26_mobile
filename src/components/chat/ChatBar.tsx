import { StyleSheet, View } from "react-native";

import { clr } from "@/lib/styles";
import { ChatTips } from "./ChatTips";
import { ChatTextInputBar } from "./ChatTextInput";
import { ChatOptions } from "./ChatOptions";

export type SecondaryBarTypes = 'tips' | 'chat_options' | 'none';

type ChatBarProps = {
  displayNewChatButton: boolean;
  secondaryBarType: SecondaryBarTypes;
  onUploadImage: (imageURI: string) => void;
  onPressSend: () => void;
  onPressNewChat: () => void;
};

export function ChatBar({ displayNewChatButton, secondaryBarType, onUploadImage, onPressSend, onPressNewChat }: ChatBarProps) {;
  const secondaryBarStyles = secondaryBarType === 'tips' ? styles.secondaryBarContainer : null;
  
  return (
    <View style={styles.container}>
      <View style={ secondaryBarStyles }>
        {secondaryBarType === 'tips' ? <ChatTips /> : null}
        {secondaryBarType === 'chat_options' ? <ChatOptions displayNewChatButton={displayNewChatButton} onPressNewChat={onPressNewChat} /> : null}
        <ChatTextInputBar onPressSend={onPressSend} onUploadImage={onUploadImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
    paddingBottom: 28,
    gap: 0,
  },
  secondaryBarContainer: {
    gap: 10,
    backgroundColor: clr.gray_light,
    borderRadius: 36,
  },
});