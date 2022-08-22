import './ChatHeader.scss';

export const ChatHeader = () => {
  return (
    <div className="ChatHeader">
      <div className="photo"><span className="photo__tick"></span></div>

      <div className="ChatHeader__name">Selected User</div>
    </div>
  );
}