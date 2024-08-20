export default function Info({
  message,
  setOpponent,
  handleRestart,
}) {
  function handleChange(e) {
    setOpponent(e.target.value)
    handleRestart()
  }

  let isRedsTurnMessage
  if (message.winnerMessage) {
    isRedsTurnMessage = ''
  } else {
    isRedsTurnMessage = message.isRedsTurn
      ? "It's reds turn."
      : "It's blues turn."
  }

  let messageMessage
  if (message.winnerMessage) {
    messageMessage = ''
  } else {
    messageMessage = message.message
  }

  return (
    <div className="info">
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
      <div className="message">
        <p className="winnerMsg">
          {message.winnerMessage ? message.winnerMessage : <></>}
        </p>
        <p className="turnMsg">{isRedsTurnMessage}</p>
        <p className="messageMsg">{messageMessage}</p>
      </div>
    </div>
  )
}
