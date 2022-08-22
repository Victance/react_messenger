import { IMessage } from "./IMessage";

export interface IChat {
  chatId: string;
  messages: Array<IMessage>;
}