function MemoryCard(props) {
  return (
    <div className="card" id={props.number} onClick={props.addPoint}>
      <img src={props.image} alt={props.name}></img>
      <p>{props.name}</p>
    </div>
  )
}

export default MemoryCard