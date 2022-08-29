import dayjs from 'dayjs';
import { useRef, useState } from 'react';
import { getResponse } from '../../api/response';
import { IChat } from '../../types/IChat';
import { IMessage } from '../../types/IMessage';
import './ChatInput.scss';

type Props = {
  save: (value: IChat[]) => void;
  chats: IChat[];
  setTest: (value:number) => void
  selectedChat: IChat;
  test: number;
  fieldRef: React.RefObject<HTMLDivElement>;
  selectedChatId: string;
};

export const ChatInput: React.FC<Props> = ({ save, chats, setTest, selectedChat, selectedChatId, test, fieldRef }) => {
  const [newText, setNewText] = useState('');
  const formRef = useRef<HTMLButtonElement>(null);

  const scroll = () => {
    if(fieldRef.current) {
      fieldRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  const findMaxId = () => {
    return Math.max(...selectedChat.messages.map(message => +message.id));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!newText.length) {
      return;
    }

    const newMessage: IMessage = {
      id: (findMaxId() + 1).toString(),
      isAuthor: true,
      text: newText.trim(),
      date: dayjs().format('D/M/YY h:mm A'),
    } 

    let firstChatToSave = [...chats]
    firstChatToSave.find()
    selectedChat.messages.push(newMessage);
    save(chats);
    setTest(test + 1)
    setTimeout(scroll, 1);

    setNewText('');

    const newResponseText = (await getResponse()).value;

    const newResponse: IMessage = {
      id: (findMaxId() + 1).toString(),
      isAuthor: false,
      text: newResponseText,
      date: dayjs().format('D/M/YY h:mm A'),
    } 
    
    setTimeout(() => {
      selectedChat.messages.push(newResponse);
      save(chats);
      setTest(test + 2)
      setTimeout(scroll, 1);
    }, 10000)
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