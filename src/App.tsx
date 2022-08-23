import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useLocalStorage } from './customHooks/useLocalStorage';
import chatsFromServer from './api/chats.json'
import { useState } from 'react';
import { IChat } from './types/IChat';
import { Outlet, useOutletContext } from 'react-router-dom';

type ContextType = { chats: IChat[] };

const App: React.FC = () => {
  const [chats] = useLocalStorage('chats', chatsFromServer)

  const [selectedChat, setSelectedChat] = useState<IChat | null>(chats.find(chat => chat.isSelected) || null)

  return (
    <div className="App">
      <Sidebar 
        chats={chats}
        setSelectedChat={setSelectedChat}
        selectedChat={selectedChat}
      />
      <Outlet context={{ chats }} />
    </div>
  );
}

export default App;

export function useChats() {
  return useOutletContext<ContextType>();
}
