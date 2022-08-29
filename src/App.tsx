import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useLocalStorage } from './customHooks/useLocalStorage';
import chatsFromServer from './api/chats.json'
import { useLayoutEffect, useState } from 'react';
import { IChat } from './types/IChat';
import { Outlet, useOutletContext, useParams } from 'react-router-dom';

type ContextType = { chats: IChat[], save: (value: IChat[]) => void };

export function useChats() {
  return useOutletContext<ContextType>();
}

function useWindowWidth() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }

    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}

const App: React.FC = () => {
  const [chats, save] = useLocalStorage('chats', chatsFromServer)
  const { chatId } = useParams();
  const [windowWidth] = useWindowWidth();

  return (
    <div className="App">
      {windowWidth < 1024 && !chatId && (
        <>
          <Sidebar 
            chats={chats}
          />         
        </>
      )}

      {chatId && windowWidth < 1024 && (
        <Outlet context={{ chats, save }} />
      )}

      {windowWidth > 1024 && chatId && (
          <>
            <Sidebar 
              chats={chats}
            />

            <Outlet context={{ chats, save }} />
          </>
      )}

      {windowWidth > 1024 && !chatId && (
          <>
            <Sidebar 
              chats={chats}
            />

            <p className='Warning'>Please select chat</p>
          </>
      )}  
    </div>
  );
}

export default App;
