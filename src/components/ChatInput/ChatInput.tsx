import './ChatInput.scss';

export const ChatInput = () => {
  return (
    <div className="ChatInput">
      <form 
        action="/" 
        method="GET" 
        className="ChatInput__form"
      >
    
        <input 
          type="search" 
          placeholder="Type your message" 
          className="ChatInput__input" 
        />

        <button type="submit" className="ChatInput__button" />
      </form>
    </div>
  );
}