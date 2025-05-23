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

  function startAgain() {
    setWinner("?");
    sethumanScore(0);
    setBotScore(0);
    setBotIcon("🤖");
    setHumanIcon("🙋‍♂️");
  }
  function humanInput(val) {
    const options = {
      1: "🗿",
      2: "📜",
      3: "✂️",
    };

    HumanChoice = val;
    randomBot = Math.floor(Math.random() * (3 - 0) + 1);
    // its setting the icons of the players
    setHumanIcon(options[val]), setBotIcon(options[randomBot]);
    // if human selected the option
    console.log(val, randomBot);

    if (val) {
      console.log(randomBot, HumanChoice);
      // first three options setting the human winner
      if (randomBot == 1 && HumanChoice == 2) {
        setWinner(playerName);
        sethumanScore(humanScore + 1);
      } else if (randomBot == 2 && HumanChoice == 3) {
        setWinner(playerName);
        sethumanScore(humanScore + 1);
      } else if (randomBot == 3 && HumanChoice == 1) {
        setWinner(playerName);
        sethumanScore(humanScore + 1);
      }
      // last three option will set the bot winner
      else if (HumanChoice == 1 && randomBot == 2) {
        setWinner(bot);
        setBotScore(botScore + 1);
      } else if (HumanChoice == 2 && randomBot == 3) {
        setWinner(bot);
        setBotScore(botScore + 1);
      } else if (HumanChoice == 3 && randomBot == 1) {
        setWinner(bot);
        setBotScore(botScore + 1);
      } else if (HumanChoice == randomBot) {
        setWinner("Match draw 🤝");
      }
    }
  }

  return (
    <>
      <div className="entry">
        <input
          type="text"
          placeholder="Player name"
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <button onClick={startAgain}> Reset</button>
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
