import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import './Styles/App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />

      </BrowserRouter>
    </div>
  );
}

export default App;
