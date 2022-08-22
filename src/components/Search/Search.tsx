import './Search.scss';
import '../../styles/photo.scss';

export const Search = () => {
  return (
    <div className="Search">
      <div className="photo Search__photo"><span className="photo__tick"></span></div>

      <form 
        action="/" 
        method="GET" 
        className="Search__form"
      >
        <button type="submit" className="Search__button" />
    
        <input 
          type="search" 
          placeholder="Search or start new chat" 
          className="Search__input" 
        />
      </form>
    </div>
  );
}