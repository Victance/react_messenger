
import { AllChats } from '../AllChats/AllChats';
import './Sidebar.scss';
import photo from '../../img/Photo.jpg'
import '../../styles/photo.scss';
import { IChat } from '../../types/IChat';

type Props = {
  chats: IChat[];
  setSelectedChat: (value: IChat) => void;
  selectedChat: IChat | null;
}

export const Sidebar: React.FC<Props> = ({ chats, setSelectedChat, selectedChat }) => {
  const displayedChats = chats;

  return (
    <div className="Sidebar">
      <div className="Search">
        <div className="photo">
          <img
            className='photo__img'
            alt='User'
            src={photo}
          />
        </div>

        <form 
          action="/" 
          method="GET" 
          className="Search__form"
        >
          <button type="submit" className="Search__button" />
      
          <input 
            type="search" 
            placeholder="Search or start new chat" 
            className="Search__input" 
          />
        </form>
      </div>

      <AllChats 
        chats={displayedChats}
        setSelectedChat={setSelectedChat}
        selectedChat={selectedChat}
      />
    </div>
  );
}