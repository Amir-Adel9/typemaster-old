import React, { useEffect } from 'react';
import './styles/StartButton.css';

const StartButton = (props) => {
  useEffect(() => {
    resetTimer();
  }, [props.theWord]);
  const resetTimer = () => {
    if (props.difficulty.wordCount === 15) {
      props.difficulty.time = 8;
    } else if (props.difficulty.wordCount === 25) {
      props.difficulty.time = 6;
    } else {
      props.difficulty.time = 4;
    }
  };
  const startHandler = () => {
    props.wordHandler();
    props.focusHandler();
    props.buttonHandler();
    const gameInterval = setInterval(() => {
      props.difficulty.time--;
      props.onGameStart(props.difficulty.time);
      if (props.difficulty.wordCount === props.gameState.currentScore) {
        props.resultHandler('won');
        clearInterval(gameInterval);
      }
      if (props.difficulty.time === 0) {
        props.resultHandler('lost');
        clearInterval(gameInterval);
        return;
      }
    }, 1000);
  };
  return (
    <button
      onClick={startHandler}
      className='start-button'
      ref={props.innerRef}
    >
      Start Playing
    </button>
  );
};

export default StartButton;
