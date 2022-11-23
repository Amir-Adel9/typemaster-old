import React from 'react';
import './styles/GameState.css';

const GameState = (props) => {
  return (
    <div className='game-state'>
      <div>
        Time Left: <span>{props.gameInfo.timeLeft}</span> Seconds
      </div>
      <div>
        {!props.gameResult ? (
          ''
        ) : props.gameResult === 'lost' ? (
          <span className='lost-game'>You Lost</span>
        ) : props.gameResult === 'won' ? (
          <span className='won-game'>You Won</span>
        ) : (
          ''
        )}
      </div>
      <div>
        Score: <span>{props.gameState.currentScore}</span> From{' '}
        <span>{props.difficulty.wordCount}</span>
      </div>
    </div>
  );
};

export default GameState;
