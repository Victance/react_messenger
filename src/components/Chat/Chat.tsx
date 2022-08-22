import './Chat.scss';
import { ChatHeader } from "../ChatHeader/ChatHeader";
import { ChatMessages } from '../ChatMessages/ChatMessages';
import { ChatInput } from '../ChatInput/ChatInput';

export const Chat = () => {
  return (
    <div className="Chat">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
}