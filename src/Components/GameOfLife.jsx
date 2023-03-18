import React from "react";

import '../Styles/GameOfLife.css';

class GameOfLife extends React.Component {

  constructor(props) {
    super(props);

    this.height = parseInt(window.innerHeight / 15);
    this.width = parseInt(window.innerWidth / 15);

    const [grid, elementGrid] = this.createGol();

    this.state = {

      grid,
      elementGrid,
    }
  }
  
  componentDidMount() {
    setInterval(() => this.tick(), 4000);
  }

  createGol() {

    const grid = Array.from(Array(this.height), () => new Array(this.width).fill(false));
    const elementGrid = [];


    for (let i = 0; i < this.height; i++) {
      const elementRow = [];
      for (let j = 0; j < this.width; j++) {
        
        let newCell = (<div key={`cell-${i}-${j}`} className='gol-cell' />)
        if (Math.random() > 0.8) {
          grid[i][j] = true;
          newCell = (<div key={`cell-${i}-${j}`} className='gol-cell alive' />)
        }
        elementRow.push(newCell);
      }
      elementGrid.push(<div key={`row-${i}`} className="gol-row">{elementRow}</div>);
    }

    return [grid, elementGrid];
  }

  tick() {
    const newGrid = Array.from(Array(this.height), () => new Array(this.width).fill(false));

    const grid = this.state.grid;
    const elementGrid = document.querySelector('.gol-grid');

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        
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
      
    const grid = this.state.grid;
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

        if (newI < 0 || newI >= this.height || newJ < 0 || newJ >= this.width) continue;

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