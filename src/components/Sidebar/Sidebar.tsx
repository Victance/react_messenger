import { IChat } from '../../types/IChat';
import { AllChats } from '../AllChats/AllChats';
import { Search } from '../Search/Search';
import './Sidebar.scss';

type Props = {
  chats: IChat[];
};

export const Sidebar: React.FC<Props> = ({ chats }) => {
  return (
    <div className="Sidebar">
      <Search />
      <AllChats chats={chats}/>
    </div>
  );
}