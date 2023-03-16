import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import ThemeSwitcher from './Components/ThemeSwitcher';
import Home from './Pages/Home';
import Contact from './Components/Contact';
import GameOfLife from './Components/GameOfLife';
import './Styles/App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <GameOfLife />
        <ThemeSwitcher />
        {/* <Navbar /> */}

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>

        <footer>
          <Contact />
          <small className='copyright'>&copy; Copyright 2023 Fernando Valdés García</small>
        </footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
