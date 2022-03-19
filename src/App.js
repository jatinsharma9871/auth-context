import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
     <h1>Auth Context</h1>
     <Navbar/>
     <Status/>
    </div>
  );
}

export default App;
