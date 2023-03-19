import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ThemeSwitcher from './Components/ThemeSwitcher';
import Contact from './Components/Contact';
import GameOfLife from './Components/GameOfLife';
import './Styles/App.css';
import NavButton from './Components/NavButton';

import AnimatedRoutes from './Components/AnimatedRoutes';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      theme: 'light',
    }

    this.routes = new Map();
    this.routes.set('/', 'Home');
    this.routes.set('/about', 'About Me');
    this.routes.set('/projects', 'My Projects');
  }
  
  changeTheme(theme) {
    this.setState({ theme });
  }

  render() {
    return (
      <div className="App">
        
        <BrowserRouter basename={process.env.PUBLIC_URL}>
  
          <GameOfLife />
          <ThemeSwitcher changeTheme={this.changeTheme.bind(this)} />
  
          <main>
            <AnimatedRoutes />
          </main>

          <NavButton routes={this.routes} theme={this.state.theme} position="left" />
          <NavButton routes={this.routes} theme={this.state.theme} position="right" />

          <footer>
            <Contact theme={this.state.theme} />
            <small className='copyright'>&copy; Copyright 2023 Fernando Valdés García</small>
          </footer>
  
        </BrowserRouter>
      </div>
    );
  }
}
