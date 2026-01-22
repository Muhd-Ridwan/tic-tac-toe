// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

export default function GameBoard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

  // State below is called deriving state
  // Producing some computed value that is derived from gameTurns state that managed in App component
  // let gameBoard = initialGameBoard;

  // // override gameBoard with data from turns
  // // for below is to perform object destructuring
  // for (const turn of turns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;

  //   // Update the game board row & column with player symbol
  //   gameBoard[row][col] = player;
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowPosition) => (
        <li key={rowPosition}>
          <ol>
            {row.map((playerSymbol, colPost) => (
              <li key={colPost}>
                {/* Create an anonymous function that pass to the onClick so in the app does not have an error & got full control over how on select square will be executed */}
                <button
                  onClick={() => onSelectSquare(rowPosition, colPost)}
                  disabled={playerSymbol !== null}
                >
                  {/* disbaled function make the button cant click, so set the condition, if the disable is true, than the button cant be click again */}
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
