import './Chat.scss';
import { ChatHeader } from "../ChatHeader/ChatHeader";
import { ChatMessages } from '../ChatMessages/ChatMessages';
import { ChatInput } from '../ChatInput/ChatInput';
import { useChats } from '../../App';
import { useParams } from 'react-router-dom';

export const Chat: React.FC = () => {
  const { chats } = useChats();
  const { chatId } = useParams();

  const selectedChat = chats.find(chat => chat.id === chatId) || null;

  return (
    <div className="Chat">
      <ChatHeader selectedChat={selectedChat} />
      <ChatMessages selectedChat={selectedChat} />
      <ChatInput />
    </div>
  );
}