import logo from './logo.svg';
import Sidebar from "./components/Sidebar.js"
import Communications from './components/Communications';
import Messages from './components/Messages';
import './App.css';

function App() {
  return (
    <div className="slack-container">
    <Sidebar />
    <Communications />
    <Messages />
    </div>
  );
}

export default App;
