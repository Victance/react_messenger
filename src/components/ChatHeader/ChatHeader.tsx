import { IChat } from '../../types/IChat';
import './ChatHeader.scss';
import '../../styles/photo.scss';

type Props = {
  selectedChat: IChat | null;
};

export const ChatHeader: React.FC<Props> = ({ selectedChat }) => {
  return (
    
    <div className="ChatHeader">
      {selectedChat !== null ? (
        <>
        <div className="photo">
          <img
            className='photo__img'
            alt={selectedChat.userData.name}
            src={selectedChat.userData.avatar}
          />
        </div>

        <div className="ChatHeader__name">{selectedChat.userData.name} </div>
        </>
      ) : ('')}
      
    </div>
  );
}