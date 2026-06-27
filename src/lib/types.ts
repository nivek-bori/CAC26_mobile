// TODO: find & replace this uses with database type
export type TemporaryChatMessage = {
  role: "user" | "ai";
  msg: string;
};

export type TemporaryChat = {
  id: string;
  name: string;
  messages: TemporaryChatMessage[];
};