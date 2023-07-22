import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ThemeSwitcher from './Components/ThemeSwitcher';
import Contact from './Components/Contact';
import GameOfLife from './Components/GameOfLife';
import NavButton from './Components/NavButton';
import AnimatedRoutes from './Components/AnimatedRoutes';

import './Styles/App.css';
import './Styles/Media.css';
import logo from './Assets/logo.png';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      theme: 'light',
    }

    this.routes = new Map();
    this.routes.set('/', 'Home');
    this.routes.set('/projects', 'My Projects');
    this.routes.set('/about', 'About Me');
  }
  
  changeTheme(theme) {
    this.setState({ theme });
  }

  render() {

    const year = new Date().getFullYear();

    return (
      <div className="App">
        
        <BrowserRouter basename={process.env.PUBLIC_URL}>
  
          {/* <GameOfLife /> */}

          <div className='cv-outline'>
            <a className='cv-button' href='/portfolio/fernando-valdes-CV.pdf' target="_blank" rel="noopener noreferrer">
              <h1>Check my CV</h1>
            </a>
          </div>

          <div className='logo-container'>
            <img alt='logo' src={logo} className='logo' width={100}/>
          </div>

          <ThemeSwitcher changeTheme={this.changeTheme.bind(this)} />

          <main>
            <AnimatedRoutes />
          </main>

          <NavButton routes={this.routes} theme={this.state.theme} position="left" />
          <NavButton routes={this.routes} theme={this.state.theme} position="right" />

          <footer>
            <Contact theme={this.state.theme} />
            <small className='copyright'>{`© Copyright ${year} Fernando Valdés García`}</small>
          </footer>
  
        </BrowserRouter>
      </div>
    );
  }
}
