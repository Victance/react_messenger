import './SpecificChat.scss';
import '../../styles/photo.scss';
import { IMessage } from '../../types/IMessage';

type Props = {
  name: string;
  photo: string;
  dialog: IMessage[]
};

export const SpecificChat: React.FC<Props> = ({ name, photo, dialog  }) => {
  return (
    <div className="SpecificChat">
      <div className="photo">
        <img
          className='photo__img'
          alt={name}
          src={photo}
        />
      </div>

      <div className="SpecificChat__container">
        <div className="SpecificChat__sub-container">
          <div className="SpecificChat__name">{name}</div>
          <div className="SpecificChat__date">{dialog[dialog.length - 1].date}</div>
        </div>

        <div className="SpecificChat__message">{dialog[dialog.length - 1].text}</div>
      </div>
    </div>
  );
}