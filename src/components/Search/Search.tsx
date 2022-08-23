import './Search.scss';
import '../../styles/photo.scss';
import chatsFromServer from '../../api/chats.json'
import { useLocalStorage } from '../../customHooks/useLocalStorage';
import photo from './Photo.jpg'

export const Search = () => {
  const [chats] = useLocalStorage('chats', chatsFromServer)

  return (
    <div className="Search">
      <div className="photo">
        <img
          className='photo__img'
          alt='User'
          src={photo}
        />
      </div>

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