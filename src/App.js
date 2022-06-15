import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import icon from './assets/icon.png'

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [memory, setMemory] = useState([]);


  const addPoint = (e) => {
    let newScore = score;
    setMemory([...memory, e.currentTarget.id])
    setScore(newScore += 1);
  }

  useEffect(() => {
    let oldMemory = [...memory];
    const isGameLoss = oldMemory.includes(oldMemory.pop());
    if (isGameLoss) {
      if (score > best) {
        setBest(score - 1);
      }
      setScore(0);
      setMemory([]);
    }

  },[score])

  return (
    <div className='app'>
      <img className='icon' src={icon} alt='valorant icon' />
      <ScoreBoard score={score} best={best} />
      <Board addPoint={addPoint}/>
    </div>
  );
}

export default App;
