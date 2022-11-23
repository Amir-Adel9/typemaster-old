import React from 'react';
import './styles/WordsBox.css';

const WordsBox = (props) => {
  return (
    <div className='words-box'>
      {props.upcomingWords.length === 0 ||
      props.upcomingWords.length === props.difficulty.wordCount ? (
        <span>Words Will Appear Here</span>
      ) : (
        props.upcomingWords.map((word) => <span key={word}>{word}</span>)
      )}
    </div>
  );
};

export default WordsBox;
