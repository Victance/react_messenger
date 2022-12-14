
import { AllChats } from '../AllChats/AllChats';
import './Sidebar.scss';
import photo from '../../img/Photo.jpg'
import '../../styles/photo.scss';
import { IChat } from '../../types/IChat';
import { useState } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

type Props = {
  chats: IChat[];
}

export const Sidebar: React.FC<Props> = ({ chats }) => {
  const [query, setQuery] = useState('');
  const queryLower = query.toLowerCase();
  let displayedChats: IChat[];
  
  dayjs.extend(customParseFormat)

  const chatsSortedByDate = chats.sort((chat1, chat2) => +dayjs(chat2.messages[chat2.messages.length - 1].date, 'D/M/YY h:mm A')
   - +dayjs(chat1.messages[chat1.messages.length - 1].date, 'D/M/YY h:mm A'));
  
   
  const chatsFilteredByName = chats.filter(chat => chat.userData.name.toLowerCase().includes(queryLower));
  const chatsFilteredByText = chats.filter(chat => chat.messages.some(message => message.text.toLowerCase().includes(queryLower)));

  if (chatsFilteredByName.length) {
    displayedChats = chatsFilteredByName;
  } else if (chatsFilteredByText.length) {
    displayedChats = chatsFilteredByText
  } else if (queryLower) {
    displayedChats = [];
  } else {
    displayedChats = chatsSortedByDate;
  }
  
  return (
    <div className="Sidebar">
      <div className="Search">
        <div className="photo Search__photo photo--ticked">
          <img
            className='photo__img'
            alt='User'
            src={photo}
          />
        </div>

        <form 
          className="Search__form"
        >
          <div className="Search__button" />
      
          <input 
            type="search" 
            placeholder="Search or start new chat" 
            className="Search__input" 
            onChange={(event) => setQuery(event.target.value)}
          />
        </form>
      </div>

      <AllChats 
        chats={displayedChats}
        queryLower={queryLower}
      />
    </div>
  );
}