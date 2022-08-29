import './Chat.scss';
import { ChatMessages } from '../ChatMessages/ChatMessages';
import { ChatInput } from '../ChatInput/ChatInput';
import { useChats } from '../../App';
import { Link, useParams } from 'react-router-dom';
import '../../styles/photo.scss';
import { useRef } from 'react';
import { ScrollButton } from '../ScrollButton/ScrollButton';

export const Chat: React.FC = () => {
  const { chats, save, setTest, test } = useChats();
  const { chatId } = useParams();
  const fieldRef = useRef<HTMLDivElement>(null);
  const selectedChat = chats.find(chat => chat.id === chatId) || null;

  return (
    <>
    <div className="Chat">
      {selectedChat !== null && (
        <>
          <div className="Chat__header">
            <Link
              to="/"
              className='Chat__header-icon-back' 
            />

            <div className="photo Chat__header-photo photo--ticked">
              <img
                className='photo__img'
                alt={selectedChat.userData.name}
                src={selectedChat.userData.avatar}
              />
            </div>

            <div className="Chat__header-name">{selectedChat.userData.name} </div>
          </div>

          <div className="ChatMessagesContainer"> 
            {selectedChat.messages.map(message => (
              <ChatMessages
                key={message.id}
                message={message} 
                userData={selectedChat.userData}
                fieldRef={fieldRef} 
              />
            ))}

            <ScrollButton fieldRef={fieldRef} />
          </div>

          <ChatInput 
            save={save} 
            chats={chats} 
            setTest={setTest} 
            selectedChat={selectedChat} 
            test={test}
            fieldRef={fieldRef}
          />
        </>
      )}  
    </div>
    </>
  )
}