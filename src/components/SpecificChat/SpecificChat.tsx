import './SpecificChat.scss';
import '../../styles/photo.scss';
import classNames from 'classnames';
import { IChat } from '../../types/IChat';
import { Link } from 'react-router-dom';

type Props = {
  chat: IChat
  setSelectedChat: (value: IChat) => void;
  selectedChat: IChat | null;
};

export const SpecificChat: React.FC<Props> = ({ chat, setSelectedChat, selectedChat }) => {
  const { name, avatar } = chat.userData;
  return (
    <Link 
      to={`/${chat.id}`}
      className={classNames("SpecificChat")}
    >
      <div className="photo">
        <img
          className='photo__img'
          alt={name}
          src={avatar}
        />
      </div>

      <div className="SpecificChat__container">
        <div className="SpecificChat__sub-container">
          <div className="SpecificChat__name">{name}</div>
          <div className="SpecificChat__date">{chat.dialog[chat.dialog.length - 1].date}</div>
        </div>

        <div className="SpecificChat__message">{chat.dialog[chat.dialog.length - 1].text}</div>
      </div>
    </Link>
  );
}