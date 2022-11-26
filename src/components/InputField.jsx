import React, { useEffect, useRef } from 'react';
import './styles/InputField.css';

const InputField = (props) => {
  useEffect(() => {
    props.innerRef.current.focus();
  }, [props.result]);
  const changeInputHandler = (event) => {
    if (event.target.value.toLowerCase() === props.theWord.toLowerCase()) {
      props.gameState.currentScore++;
      event.target.value = '';
      props.wordHandler();
    }
  };
  return (
    <input
      onChange={changeInputHandler}
      className='input-field'
      ref={props.innerRef}
      disabled={props.result ? true : false}
    ></input>
  );
};

export default InputField;
