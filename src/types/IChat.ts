import { IMessage } from "./IMessage";
import { IUser } from "./IUser";

export interface IChat {
  id: string;
  userData: IUser;
  isUnread: boolean;
  dialog: IMessage[];
};