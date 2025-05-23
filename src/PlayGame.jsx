export default function PlayGame({
  human,
  bot,
  humanInput,
  humanScore,
  botScore,
  humanIcon,
  botIcon,
  winner,
}) {
  return (
    <>
      <div className="play-ground">
        <div className="human">
          <div
            style={{
              fontSize: 40,
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <span onClick={() => humanInput(1)} style={{ cursor: "pointer" }}>
              🗿
            </span>
            <span onClick={() => humanInput(2)} style={{ cursor: "pointer" }}>
              📜
            </span>
            <span onClick={() => humanInput(3)} style={{ cursor: "pointer" }}>
              ✂️
            </span>
          </div>
          <div>
            <span className="icon">{humanIcon}</span>
            <h1>{human}</h1>
            <span>Score: {humanScore}</span>
          </div>
        </div>
        <div className="bot">
          <div>
            <span className="icon">{botIcon}</span>
            <h1>{bot}</h1>
            <span>Score: {botScore}</span>
          </div>

          <div
            style={{
              fontSize: 40,
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <span>🗿</span>
            <span>📜</span>
            <span>✂️</span>
          </div>
        </div>
      </div>
      <p>Winner : {winner}</p>
    </>
  );
}
