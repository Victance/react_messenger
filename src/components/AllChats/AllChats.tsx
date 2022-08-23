import { useLocalStorage } from '../../customHooks/useLocalStorage';
import { SpecificChat } from '../SpecificChat/SpecificChat';
import './AllChats.scss';
import chatsFromServer from '../../api/chats.json'

export const AllChats: React.FC = () => {
  const [chats] = useLocalStorage('chats', chatsFromServer)

  return (
    <div className="AllChats">
      <div className="AllChats__title">Chats</div>

      {chats.map(chat => (
        <SpecificChat 
          key={chat.id}
          name={chat.userData.name}
          photo={chat.userData.avatar}
          dialog={chat.dialog}
        />
      ))}
    </div>
  );
}