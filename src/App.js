import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameOfLife from './Components/GameOfLife';

import Navbar from './Components/Navbar';
import ThemeSwitcher from './Components/ThemeSwitcher';
import Home from './Pages/Home';
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

      </BrowserRouter>
    </div>
  );
}

export default App;
