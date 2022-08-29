import './SpecificChat.scss';
import '../../styles/photo.scss';
import classNames from 'classnames';
import { IChat } from '../../types/IChat';
import { Link, useParams } from 'react-router-dom';
import { IMessage } from '../../types/IMessage';
import dayjs from 'dayjs';

type Props = {
  chat: IChat;
  queryLower: string;
};

export const SpecificChat: React.FC<Props> = ({ chat, queryLower }) => {
  const { name, avatar } = chat.userData;
  const { chatId } = useParams();

  let displayedMessage: IMessage;

  const lastMessage = chat.messages[chat.messages.length - 1]
  let displayedMessageText;

  if (queryLower.length) {
    displayedMessage = chat.messages.reverse().find(message => message.text.toLowerCase().includes(queryLower)) || lastMessage;
  } else {
    displayedMessage = lastMessage;
  }

  if (displayedMessage.text.length > 50) {
    displayedMessageText = displayedMessage.text.slice(0, 50) + '...'
  } else {
    displayedMessageText = displayedMessage.text;
  }

  const customParseFormat = require('dayjs/plugin/customParseFormat')
  dayjs.extend(customParseFormat)
  const displayedDate = dayjs(displayedMessage.date, 'D/M/YY h:mm A').format('MMM D, YYYY');

  return (
    <Link 
      to={`/${chat.id}`}
      className={classNames("SpecificChat", {
        "SpecificChat--selected" : chat.id === chatId,
      })}
    >
      <div className="photo photo--ticked">
        <img
          className='photo__img'
          alt={name}
          src={avatar}
        />
      </div>

      <div className="SpecificChat__container">
        <div className="SpecificChat__sub-container">
          <div className="SpecificChat__name">{name}</div>
          <div className="SpecificChat__date">{displayedDate}</div>
        </div>

        <div className="SpecificChat__message">{displayedMessageText}</div>
      </div>
    </Link>
  );
}