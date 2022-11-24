import React from 'react';
import './styles/TheWord.css';

const TheWord = (props) => {
  const theWord = props.theWord;
  const capitalizedWord = theWord.charAt(0).toUpperCase() + theWord.slice(1);
  return <div className='the-word'>{capitalizedWord}</div>;
};

export default TheWord;
