import { useEffect, useRef, useState } from 'react';

import './App.css';
import GameInfo from './components/GameInfo';
import GameState from './components/GameState';
import InputField from './components/InputField';
import StartButton from './components/StartButton';
import TheWord from './components/TheWord';
import WordsBox from './components/WordsBox';

function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState({
    time: 7,
    wordCount: 15,
  });
  const [words, setWords] = useState(['']);
  const [currentWord, setCurrentWord] = useState('');
  const [currentGameInfo, setCurrentGameInfo] = useState({
    timeLeft: currentDifficulty.time,
  });
  const [currentGameState, setCurrentGameState] = useState({
    currentScore: 0,
  });
  const [result, setResult] = useState(null);

  const inputRef = useRef();
  const buttonRef = useRef();
  const getWords = async () => {
    fetch(
      `https://random-word-api.herokuapp.com/word?number=${currentDifficulty.wordCount}`
    )
      .then((response) => response.json())
      .then((words) => {
        setWords(words);
      });
  };
  useEffect(() => {
    getWords();
  }, [currentDifficulty, result]);

  const changeDifficultyHandler = (difficulty) => {
    setCurrentDifficulty(difficulty);
    setCurrentGameInfo({ timeLeft: difficulty.time });
  };
  const currentWordHandler = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    const wordIndex = words.indexOf(randomWord);
    words.splice(wordIndex, 1);
    return randomWord;
  };
  const inputFocusHandler = () => {
    inputRef.current.focus();
  };
  const buttonRemoveHandler = () => {
    buttonRef.current.style.display = 'none';
    setResult(null);
  };
  const startGameHandler = (timeLeft) => {
    setCurrentGameInfo({ timeLeft: timeLeft });
  };
  const gameResultHandler = (result) => {
    setResult(result);
    setCurrentGameInfo({ timeLeft: currentDifficulty.time });
    setCurrentGameState({ currentScore: 0 });
    buttonRef.current.style.display = 'block';
  };
  return (
    <div>
      <header>Type Master</header>
      <main>
        <GameInfo onChangeDifficulty={changeDifficultyHandler} />
        <TheWord theWord={currentWord} />
        <InputField
          theWord={currentWord}
          gameState={currentGameState}
          difficulty={currentDifficulty}
          result={result}
          innerRef={inputRef}
          wordHandler={currentWordHandler}
        />
        <StartButton
          difficulty={currentDifficulty}
          wordHandler={currentWordHandler}
          wordsArray={words}
          theWord={currentWord}
          inputRef={inputRef}
          innerRef={buttonRef}
          result={result}
          buttonHandler={buttonRemoveHandler}
          gameInfo={currentGameInfo}
          gameState={currentGameState}
          focusHandler={inputFocusHandler}
          onGameStart={startGameHandler}
          resultHandler={gameResultHandler}
        />
        <WordsBox upcomingWords={words} difficulty={currentDifficulty} />
        <GameState
          difficulty={currentDifficulty}
          gameInfo={currentGameInfo}
          gameState={currentGameState}
          gameResult={result}
        />
      </main>
    </div>
  );
}

export default App;
