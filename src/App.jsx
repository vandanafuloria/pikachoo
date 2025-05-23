import { use, useState, useSyncExternalStore } from "react";
import PlayGame from "./PlayGame";

import "./App.css";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [humanScore, sethumanScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [humanIcon, setHumanIcon] = useState("🙋‍♂️");
  const [botIcon, setBotIcon] = useState("🤖");
  const [winner, setWinner] = useState("?");
  let human;
  let bot;

  human = "Hi am " + playerName;
  bot = "I am Bot";
  let HumanChoice;
  let randomBot;

  function humanInput(val) {
    console.log(val);
    const options = {
      1: "🗿",
      2: "📜",
      3: "✂️",
    };

    HumanChoice = val;
    randomBot = Math.floor(Math.random() * (3 - 0) + 1);
    console.log(botIcon);
    console.log(setHumanIcon(options[val]), setBotIcon(options[randomBot]));
    if (!val) {
      console.log(randomBot, HumanChoice);
      if (randomBot == 1 && HumanChoice == 2) {
        setHumanIcon(options[2]);
        setBotIcon(options[1]);
      }
    }
  }

  return (
    <>
      <div className="startPromt">
        <input
          type="text"
          placeholder="Player name"
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <button>Start</button>
        {/* <button onClick={startGame}>Reset</button> */}
      </div>

      <PlayGame
        human={human}
        bot={bot}
        humanInput={humanInput}
        humanScore={humanScore}
        botScore={botScore}
        humanIcon={humanIcon}
        botIcon={botIcon}
        winner={winner}
      />
    </>
  );
}

export default App;
