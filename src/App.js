import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ThemeSwitcher from './Components/ThemeSwitcher';
import Home from './Pages/Home';
import Contact from './Components/Contact';
import GameOfLife from './Components/GameOfLife';
import './Styles/App.css';
import NavButton from './Components/NavButton';
import About from './Pages/About';
import Projects from './Pages/Projects';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      theme: 'light',
    }

    this.routes = new Map();
    this.routes.set('/', 'Home');
    this.routes.set('/about', 'About');
    this.routes.set('/projects', 'Projects');
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
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
            </Routes>
          </main>

          <NavButton routes={this.routes} position="left" />
          <NavButton routes={this.routes} position="right" />

          <footer>
            <Contact theme={this.state.theme} />
            <small className='copyright'>&copy; Copyright 2023 Fernando Valdés García</small>
          </footer>
  
        </BrowserRouter>
      </div>
    );
  }
}
