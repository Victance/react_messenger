import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { useRef, useState } from 'react';
import { getResponse } from '../../api/response';
import { IChat } from '../../types/IChat';
import { IMessage } from '../../types/IMessage';
import './ChatInput.scss';

type Props = {
  save: (value: IChat[]) => void;
  chats: IChat[];
  fieldRef: React.RefObject<HTMLDivElement>;
  selectedChatId: string;
};

export const ChatInput: React.FC<Props> = ({ save, chats, selectedChatId, fieldRef }) => {
  const [newText, setNewText] = useState('');
  const formRef = useRef<HTMLButtonElement>(null);

  const scroll = () => {
    if(fieldRef.current) {
      fieldRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  let firstChatsToSave: IChat[];
  let secondChatsToSave: IChat[];

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!newText.length) {
      return;
    }

    const newMessage: IMessage = {
      id: uuidv4(),
      isAuthor: true,
      text: newText.trim(),
      date: dayjs().format('D/M/YY h:mm A'),
    } 

    firstChatsToSave = [...chats]
    firstChatsToSave.find(chat => chat.id === selectedChatId)?.messages.push(newMessage);
    save(firstChatsToSave);

    setTimeout(scroll, 1);

    setNewText('');

    const newResponseText = (await getResponse()).value;

    const newResponse: IMessage = {
      id: uuidv4(),
      isAuthor: false,
      text: newResponseText,
      date: dayjs().format('D/M/YY h:mm A'),
    } 
    
    setTimeout(() => {
      secondChatsToSave = [...firstChatsToSave]
      secondChatsToSave.find(chat => chat.id === selectedChatId)?.messages.push(newResponse);
      save(secondChatsToSave);
      setTimeout(scroll, 1);
    }, 1000)
  }

  const handleKeyPressed = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSubmit(event);
    }
  }

  return (
    <div className="ChatInput">
      <form 
        className="ChatInput__form"
        onSubmit={handleSubmit}
      >
        <textarea 
          name="text"
          autoFocus={true}
          className="ChatInput__input"
          value={newText}
          onChange={(event) => {
            setNewText(event.target.value)
          }}
          onKeyPress={handleKeyPressed}
        />

        {newText && (
          <button type="submit" className="ChatInput__button" ref={formRef}/>
        )}
      </form>
    </div>
  );
}