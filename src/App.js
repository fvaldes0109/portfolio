import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ThemeSwitcher from './Components/ThemeSwitcher';
import Home from './Pages/Home';
import Contact from './Components/Contact';
import GameOfLife from './Components/GameOfLife';
import './Styles/App.css';
import NavButton from './Components/NavButton';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      theme: 'light',
    }
  }
  
  changeTheme(theme) {
    this.setState({ theme });
  }

  render() {
    return (
      <div className="App">
        
        <BrowserRouter>
  
          <GameOfLife />
          <ThemeSwitcher changeTheme={this.changeTheme.bind(this)} />
  
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </main>

          <NavButton position="left" />
          <NavButton position="right" />

          <footer>
            <Contact theme={this.state.theme} />
            <small className='copyright'>&copy; Copyright 2023 Fernando Valdés García</small>
          </footer>
  
        </BrowserRouter>
      </div>
    );
  }
}
