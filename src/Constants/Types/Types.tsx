export type User = {
  id: string;
  name: string;
  iamgeUri: string;
  status: string;
};

export type Message = {
  id: String;
  content: String;
  createdAt: string;
  user: User;
};

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
};

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
};
