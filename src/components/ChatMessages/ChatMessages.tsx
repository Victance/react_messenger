import { IChat } from '../../types/IChat';
import './ChatMessages.scss';

type Props = {
  selectedChat: IChat | null;
};

export const ChatMessages: React.FC<Props> = ({ selectedChat }) => {
  return (
    <>
      <div className="ChatMessages">
      
        <div className="ChatMessages__container">
          <div className="photo" />
          
          <div className="ChatMessages__text">
            Hello! How are you?


            <div className="ChatMessages__date">
              4/22/17 4:00 AM
            </div>
          </div>
        </div>

        <div className="ChatMessages__container">
          <div className="photo" />
          
          <div className="ChatMessages__text">
            Hello! How are you?


            <div className="ChatMessages__date">
              4/22/17 4:00 AM
            </div>
          </div>
        </div>
      </div>
    </>
  );
}