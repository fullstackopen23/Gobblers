export default function Info({
  message,
  setOpponent,
  handleRestart,
}) {
  function handleChange(e) {
    setOpponent(e.target.value)
    handleRestart()
  }

  return (
    <div className="info">
      <div className="message">
        <p>
          {message.isRedsTurn && !message.winnerMessage
            ? "It's reds turn."
            : message.winnerMessage
            ? message.winnerMessage
            : "It's blues turn."}
        </p>
        <p>{message.message}</p>
      </div>

      <div className="top">
        <select
          onChange={handleChange}
          name="opponent"
          id="opponent-seelct"
        >
          <option value="hard">Hard</option>
          <option value="easy">Easy</option>
          <option value="friend">Play with a friend</option>
        </select>
        <button className="restartBtn" onClick={handleRestart}>
          Restart
        </button>
      </div>
    </div>
  )
}
