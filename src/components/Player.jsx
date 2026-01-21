import { useState } from "react";

export default function Player({ name, symbol }) {
  // Can use useState more than 1 if got diff pieces of state want to manage
  const [playerName, setPlayerName] = useState(name);
  const [editing, setEditing] = useState(false); // in this state to manage the boolean value whether it is editing or not.

  function handleClick() {
    // setEditing(editing ? false : true); This is one way to achieve inverting the boolean value but it is unecessary complex
    // setEditing(!editing); cannot do like this because when updating state based on previous value, should pass a function to the state updating function
    setEditing((editingVal) => !editingVal); // This one is the correct way to update state based on old state
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;
  //let buttonText = "Edit";

  if (editing) {
    editPlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    //buttonText = "Save";
  }

  return (
    <li>
      <span className=" player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{editing ? "Save" : "Edit"}</button>
    </li>
  );
}
