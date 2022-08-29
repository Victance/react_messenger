import { IChat } from '../../types/IChat';
import { SpecificChat } from '../SpecificChat/SpecificChat';
import './AllChats.scss';

type Props = {
  chats: IChat[];
  queryLower: string;
}

export const AllChats: React.FC<Props> = ({ chats, queryLower }) => {
  return (
    <div className="AllChats">
      <div className="AllChats__title">Chats</div>

      {chats.map(chat => (
        <SpecificChat 
          key={chat.id}
          chat={chat}
          queryLower={queryLower}
        />
      ))}
    </div>
  );
}