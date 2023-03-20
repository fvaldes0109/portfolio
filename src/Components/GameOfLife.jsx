import React from "react";

import '../Styles/GameOfLife.css';

class GameOfLife extends React.Component {

  constructor(props) {
    super(props);

    const { width, height, grid, elementGrid } = this.createGol();

    this.state = {

      grid,
      elementGrid,
      width,
      height,
    }

    this.resizeTimeout = () => {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.handleResize();
      }, 250);
    }
  }
  
  componentDidMount() {

    window.addEventListener('resize', this.resizeTimeout);
    setInterval(() => this.tick(), 4000);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeTimeout);
  }

  handleResize() {
    
    const { width, height, grid, elementGrid } = this.createGol();
    this.setState({ width, height, grid, elementGrid });
  }

  createGol() {

    const width = parseInt(window.innerWidth / 15);
    const height = parseInt(window.innerHeight / 15);
    const grid = Array.from(Array(height), () => new Array(width).fill(false));
    const elementGrid = []; 


    for (let i = 0; i < height; i++) {
      const elementRow = [];
      for (let j = 0; j < width; j++) {
        
        let newCell = (<div key={`cell-${i}-${j}`} className='gol-cell' />)
        if (Math.random() > 0.8) {
          grid[i][j] = true;
          newCell = (<div key={`cell-${i}-${j}`} className='gol-cell alive' />)
        }
        elementRow.push(newCell);
      }
      elementGrid.push(<div key={`row-${i}`} className="gol-row">{elementRow}</div>);
    }

    return { width, height, grid, elementGrid };
  }

  tick() {

    const { width, height, grid } = this.state;

    const newGrid = Array.from(Array(height), () => new Array(width).fill(false));
    const elementGrid = document.querySelector('.gol-grid');

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        
        const neighbours = this.countNeighbours(i, j);
        
        if (neighbours === 3 || (neighbours === 2 && grid[i][j])) {
          newGrid[i][j] = true;
        }
        if (newGrid[i][j] !== grid[i][j]) {
          elementGrid.children[i].children[j].className = `gol-cell${newGrid[i][j] ? ' alive' : ''}`;
        }
      }
    }

    this.setState({ grid: newGrid });
  }

  countNeighbours(i, j) {
    
    const { width, height, grid } = this.state;
    const dirX = [-1, 0, 1];
    const dirY = [-1, 0, 1];

    let count = 0;

    for (let x = 0; x < dirX.length; x++) {
      for (let y = 0; y < dirY.length; y++) {

        if (dirX[x] === 0 && dirY[y] === 0) {
          continue;
        }

        const newI = i + dirX[x];
        const newJ = j + dirY[y];

        if (newI < 0 || newI >= height || newJ < 0 || newJ >= width) continue;

        if (grid[newI][newJ]) count++;
      }
    }
    return count;
  }

  render() {
    
    return (
      <div className="gol-grid">
        {this.state.elementGrid}
      </div>
    );
  }
}

export default GameOfLife;