import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  return (
    <button className={"square " + props.className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={"square-" + i}
        className={this.props.winners.includes(i) ? "winner" : ""}
      />
    );
  }

  createBoard() {
    let board = [];
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row[j] = this.renderSquare(3 * i + j);
      }
      board[i] = (
        <div className="board-row" key={"row-" + i}>
          {row}
        </div>
      );
    }
    return board;
  }

  render() {
    return <div>{this.createBoard()}</div>;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          index: null,
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      isToggle: false,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          index: i,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  toggleOrder() {
    this.setState({
      isToggle: !this.state.isToggle,
    });
  }

  reverseMe(arr) {
    let newArr = arr.slice();
    return newArr.reverse();
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const draw = checkDraw(current.squares);

    let status;
    if (winner) {
      status = "Winner: " + winner.player;
    } else if (draw) {
      status = "This is a draw!";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    const moves = history.map((step, move) => {
      let x = step.index % 3;
      let y = Math.floor(step.index / 3);
      const desc = move
        ? "Go to move #" +
          move +
          ", play: " +
          step.squares[step.index] +
          " on (" +
          x +
          "," +
          y +
          ")."
        : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)} className="moveBtn">
            {desc}
          </button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winners={winner ? winner.winners : []}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{this.state.isToggle ? this.reverseMe(moves) : moves}</ol>
          <button onClick={() => this.toggleOrder()}>Toggle me!</button>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], winners: lines[i] };
    }
  }
  return null;
}

function checkDraw(squares) {
  return squares.filter((item) => item !== null).length >= 9;
}
