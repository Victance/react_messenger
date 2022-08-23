import { IChat } from '../../types/IChat';
import { SpecificChat } from '../SpecificChat/SpecificChat';
import './AllChats.scss';

type Props = {
  chats: IChat[];
  setSelectedChat: (value: IChat) => void;
  selectedChat: IChat | null;
}

export const AllChats: React.FC<Props> = ({ chats, setSelectedChat, selectedChat}) => {
  return (
    <div className="AllChats">
      <div className="AllChats__title">Chats</div>

      {chats.map(chat => (
        <SpecificChat 
          key={chat.id}
          chat={chat}
          setSelectedChat={setSelectedChat}
          selectedChat={selectedChat}
        />
      ))}
    </div>
  );
}