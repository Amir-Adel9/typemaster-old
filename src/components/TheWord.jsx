import React from 'react';
import './styles/TheWord.css';

const TheWord = (props) => {
  return <div className='the-word'>{props.theWord}</div>;
};

export default TheWord;
