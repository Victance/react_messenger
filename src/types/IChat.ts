import { IMessage } from "./IMessage";
import { IUser } from "./IUser";

export interface IChat {
  id: string;
  userData: IUser;
  messages: IMessage[];
};