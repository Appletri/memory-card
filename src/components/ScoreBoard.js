function ScoreBoard(props) {
  return(
    <div className="score-board">
      <div className="current">{`score: ${props.score}`}</div>
      <div className="best">{`best: ${props.best}`}</div>
    </div>
  )
}

export default ScoreBoard