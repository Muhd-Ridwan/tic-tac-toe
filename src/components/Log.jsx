export default function Log({ turns }) {
  return (
    <ol id="log">
      {/* When outputing a dynamic list, should have a key */}
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
