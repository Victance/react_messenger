
import { AllChats } from '../AllChats/AllChats';
import { Search } from '../Search/Search';
import './Sidebar.scss';

export const Sidebar: React.FC = () => {
  return (
    <div className="Sidebar">
      <Search />
      <AllChats />
    </div>
  );
}