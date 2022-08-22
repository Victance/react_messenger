import { IChat } from '../../types/IChat';
import { SpecificChat } from '../SpecificChat/SpecificChat';
import './AllChats.scss';

type Props = {
  chats: IChat[];
};

export const AllChats: React.FC<Props> = ({ chats }) => {
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