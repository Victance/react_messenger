import './App.scss';
import { Chat } from './components/Chat/Chat';
import { Sidebar } from './components/Sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
