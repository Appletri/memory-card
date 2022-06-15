import { useEffect, useState } from "react";
import MemoryCard from "./MemoryCard";
import UseAPI from "./UseAPI";


function Board(props) {
  const [cards, setCards] = useState([]) ;

  useEffect (() => {
    const loadCards = async () => {
      setCards(await UseAPI())
    }

    loadCards();
  }, [])


  const shuffleCards = () => {
    let shuffledCards = [...cards]
    let currentIndex = shuffledCards.length, randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shuffledCards[currentIndex], shuffledCards[randomIndex]] = [
        shuffledCards[randomIndex], shuffledCards[currentIndex]]
    }

    setCards(shuffledCards);
  }

  return(
    <div className="board" onClick={shuffleCards}>
      {cards.map((element) => {
        return(<MemoryCard addPoint={props.addPoint} number={element.id} name={element.name} image={element.image} key={element.id}/>)
      })}
    </div>
  )
}

export default Board