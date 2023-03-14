import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameOfLife from './Components/GameOfLife';

import Navbar from './Components/Navbar';
import './Styles/App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <GameOfLife />
        <Navbar />

      </BrowserRouter>
    </div>
  );
}

export default App;
