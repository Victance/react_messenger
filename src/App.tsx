import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useLocalStorage } from './customHooks/useLocalStorage';
import chatsFromServer from './api/chats.json'
import { useEffect, useLayoutEffect, useState } from 'react';
import { IChat } from './types/IChat';
import { Outlet, useOutletContext, useParams } from 'react-router-dom';
import { text } from 'stream/consumers';

type ContextType = { chats: IChat[], save: (value: IChat[]) => void, setTest: (value:number) => void, test: number };

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
  const [test, setTest] = useState(1)
  const { chatId } = useParams();
  const [windowWidth] = useWindowWidth();

  const [selectedChat, setSelectedChat] = useState<IChat | null>(chats.find(chat => chat.isSelected) || null)

  return (
    <div className="App">
      {windowWidth < 1024 && !chatId && (
        <>
          <Sidebar 
            chats={chats}
            setSelectedChat={setSelectedChat}
            selectedChat={selectedChat}
          />         
        </>
      )}

      {chatId && windowWidth < 1024 && (
        <Outlet context={{ chats, save, setTest, test }} />
       )}

       {windowWidth > 1024 && chatId && (
          <>
            <Sidebar 
              chats={chats}
              setSelectedChat={setSelectedChat}
              selectedChat={selectedChat}
            />

            <Outlet context={{ chats, save, setTest, test }} />
          </>
        )}

        {windowWidth > 1024 && !chatId && (
          <>
            <Sidebar 
              chats={chats}
              setSelectedChat={setSelectedChat}
              selectedChat={selectedChat}
            />

            <p className='Warning'>Please select chat</p>
          </>
        )}  
    </div>
  );
}

export default App;
