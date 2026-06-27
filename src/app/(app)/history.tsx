import { ChatHistory } from "@/components/ChatHistory";
import { TemporaryChat } from "@/lib/types";

export default function ChatHistoryPage() {
  // TOOD: Fill in with db data

  const temporary_chats: TemporaryChat[] = [
    { id: '1', name: 'Chat 1', messages: [] },
    { id: '2', name: 'Chat 2', messages: [] }
  ];

  return (
    <ChatHistory
      location={"San Francisco"}
      chats={temporary_chats}
      onPressChat={() => { }}
    />
  );
}