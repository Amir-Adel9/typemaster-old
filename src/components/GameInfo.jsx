import { useState } from 'react';
import './styles/GameInfo.css';

const GameInfo = (props) => {
  const levels = {
    Easy: {
      time: 7,
      wordCount: 15,
    },
    Normal: {
      time: 5,
      wordCount: 25,
    },
    Hard: {
      time: 3,
      wordCount: 30,
    },
  };

  const [difficulty, setDifficulty] = useState(levels.Easy);

  const changeDifficultyHandler = (event) => {
    setDifficulty(levels[event.target.value]);
    props.onChangeDifficulty(levels[event.target.value]);
  };

  return (
    <div className='game-info'>
      You Are Playing On The{' '}
      <span className='text-main'>
        [
        <select onChange={changeDifficultyHandler}>
          <option value='Easy'>Easy</option>
          <option value='Normal'>Normal</option>
          <option value='Hard'>Hard</option>
        </select>
        ]
      </span>{' '}
      Difficulity & You Have{' '}
      <span className='text-main font-poppins font-bold'>
        [{' '}
        {difficulty.wordCount === 15 ? 7 : difficulty.wordCount === 25 ? 5 : 3}{' '}
        ]
      </span>{' '}
      Seconds To Type The Word.
    </div>
  );
};

export default GameInfo;
