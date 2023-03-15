import React from "react";

import '../Styles/GameOfLife.css';

export default class GameOfLife extends React.Component {

  constructor(props) {
    super(props);

    this.height = parseInt(window.innerHeight / 10);
    this.width = parseInt(window.innerWidth / 10);

    this.state = {

      grid: this.createGol(),
    }
  }
  
  componentDidMount() {
    setInterval(() => this.tick(), 2000);
  }

  createGol() {

    const grid = Array.from(Array(this.height), () => new Array(this.width).fill(false));

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        
        if (Math.random() > 0.8) {
          grid[i][j] = true;
        }
      }
    }

    return grid;
  }

  generateGrid() {
    const grid = [];

    for (let i = 0; i < this.height; i++) {

      const row = [];
      for (let j = 0; j < this.width; j++) {
        row.push(<div key={'cell-' + i + '-' + j} className={`gol-cell${this.state.grid[i][j] ? ' alive' : ''}`}></div>)
      }
      grid.push(<div key={'row-' + i} className="gol-row">{row}</div>)
    }
    return grid;
  }

  tick() {

    const newGrid = Array.from(Array(this.height), () => new Array(this.width).fill(false));

    const grid = this.state.grid;
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        
        const neighbours = this.countNeighbours(i, j);
        
        if (neighbours === 3 || (neighbours === 2 && grid[i][j])) {
          newGrid[i][j] = true;
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
        {this.generateGrid()}
      </div>
    );
  }
}