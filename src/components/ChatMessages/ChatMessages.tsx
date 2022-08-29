import classNames from 'classnames';
import { IMessage } from '../../types/IMessage';
import { IUser } from '../../types/IUser';
import './ChatMessages.scss';

type Props = {
  message: IMessage;
  userData: IUser;
  fieldRef: React.RefObject<HTMLDivElement>;
};

export const ChatMessages: React.FC<Props> = ({ message, userData, fieldRef }) => {
  return (
    <>
      <div className="ChatMessages">    
        <div className={classNames("ChatMessages__container", {
            "ChatMessages__container--author" : message.isAuthor
          })}>
        
          {!message.isAuthor && (
            <div className="photo">
              <img
                className='photo__img'
                alt={userData.name}
                src={userData.avatar} 
              />
            </div>
          )}
         
          <div className={classNames("ChatMessages__text", {
            "ChatMessages__text--author" : message.isAuthor
          })}>
            {message.text}

            <div className={classNames("ChatMessages__date", {
            "ChatMessages__date--author" : message.isAuthor
          })}>
              {message.date}
            </div>
          </div>
        </div> 
   
        <div ref={fieldRef}></div>  
      </div>
    </>
  );
}