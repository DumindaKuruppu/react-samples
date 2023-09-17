import React, {useEffect, useState} from 'react';


const generateBoard = (size: number) => {
  const board = [];
  for (let i = 0; i < size; i++) {
    board.push([...Array(size)])
  }
  return board;
};

const checkHorizontalWin = (board: any[]) => {
  for (let row of board) {
    const rowSet = new Set(row)
    if (rowSet.size == 1 && !rowSet.has(undefined)) {
      return true
    }
  }
}

const rowsToColumn = (board: any) => {
  const newBoard = [];
  let column = 0;
  while (column < board[0].length) {
    const newRow = [];
    for (let row = 0; row < board.length; row++) {
      newRow.push(board[row][column]);
    }
    newBoard.push(newRow);
    column++;
  }
  return newBoard;
};

const diagonalToRow = (board: any) => {
  const newBoard: any = [[], []]
  let increment = 0;
  let decrement = board.length - 1;

  while (increment < board.length) {
    newBoard[0].push(board[increment][increment])
    newBoard[1].push(board[increment][decrement])
    increment++
    decrement++
  }
  return newBoard;
}


const checkForWin = (board: any) => {
  // Horizontal win
  if (checkHorizontalWin(board)) {
    return true
  }

  // Vertical Win
  if (checkHorizontalWin(rowsToColumn(board))) {
    return true
  }

  // Diagonal Win
  if (checkHorizontalWin(diagonalToRow(board))) {
    return true
  }

}

const TicTacToe = () => {

  const [board, setBoard] = useState(generateBoard(3));
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const [heading, setHeading] = useState("Tic-Tac-Toe")

  const handleClick = (r: number, c: number) => {
    board[r][c] = currentPlayer
    setBoard([...board])
    if (checkForWin(board)) {
      document.title = `${currentPlayer} Wins !`;
      setHeading(`${currentPlayer} Wins !`);
      setBoard(generateBoard(3))
      setCurrentPlayer("X")
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  }


  useEffect(() => {
    document.title = 'Tic-Tac-Toe'
  }, []);

  return (
    <div>
      <h1>{heading}</h1>
      <div className={'component-body'}>
        {
          board.map((row, rowNumber) => {
            return <div key={rowNumber} style={{display: "flex"}}>
              {
                row.map((cell, columnNumber) => {
                  return <div
                    key={columnNumber}
                    className={'box'}
                    onClick={() => handleClick(rowNumber, columnNumber)}
                  >
                    {cell}
                  </div>
                })
              }
            </div>
          })
        }
      </div>
    </div>
  )
}

export default TicTacToe;