import React, { useState } from 'react';
import './App.scss';
import { Chat } from './components/Chat/Chat';
import { Sidebar } from './components/Sidebar/Sidebar';
import chatsFromServer from './api/chats.json'

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar chats={chatsFromServer}/>
      <Chat />
    </div>
  );
}

export default App;
