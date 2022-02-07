import Navbar from './components/Navbar';
import './App.css';
import {useState} from 'react';
import Main from './components/Main';

function App() {
  const [content, setContent] = useState('Home');
  return (
    <div className="App" style={{paddingTop:50}}>
      <Navbar content={content} setContent={setContent}/>
      <Main content={content}/>
    </div>
  );
}
export default App;
