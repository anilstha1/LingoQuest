import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { Logo, StartIcon } from '../../config/icons';
import { useQuiz } from '../../context/QuizContext';
import { CenterCardContainer, HighlightedText, PageCenter } from '../../styles/Global';
import { ScreenTypes } from '../../types';
import { convertSeconds } from '../../utils/helpers';
import { useShuffleQuestions } from '../../hooks';
import Button from '../ui/Button';
import { useNavigate } from "react-router-dom";


const AppTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.themeColor};
  margin-top: 34px;
`;

const DetailTextContainer = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 40px;
  text-align: center;
  max-width: 500px;
`;

const DetailText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  line-height: 1.3;
`;

const QuizDetailsScreen = () => {
  const { setCurrentScreen, quizDetails } = useQuiz();

  const { selectedQuizTopic, totalQuestions, totalScore, totalTime } = quizDetails;

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen);
  };

  useShuffleQuestions();

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const hostagame = () => {
    setMessage("Hosting the game");
    navigate("/hostroom");
  };

  const navigate = useNavigate();

  const handleClick = () => {
    // Use navigate() to change the URL
   
  };

  const joingame = () => {
    setMessage(`Joining a game`);
    navigate("/joinroom")
  };

  return (
    <PageCenter light  justifycenter>
      <CenterCardContainer>
        <Logo />
        {/*<AppTitle>LingoQuest</AppTitle>
         <DetailTextContainer>
          <DetailText>
            Selected Quiz Topic: <HighlightedText>{selectedQuizTopic}</HighlightedText>
          </DetailText>
          <DetailText>
            Total questions to attempt:{' '}
            <HighlightedText>{totalQuestions}</HighlightedText>
          </DetailText>
          <DetailText>
            Score in total: <HighlightedText>{totalScore}</HighlightedText>
          </DetailText>
          <DetailText>
            Total time: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
          </DetailText>
        </DetailTextContainer> */}

<div className="App">
      <h1>Enter Your Nickname</h1>
      <input
        type="text"
        placeholder="Nickname"
        value={name}
        onChange={handleNameChange}
      />
      <br />
      <button onClick={hostagame}>Host Game</button>
      <button onClick={joingame}>Join a Game</button>
      
      <p>{message}</p>
    </div>

        <Button
          text="Start"
          icon={<StartIcon />}
          iconPosition="left"
          onClick={goToQuestionScreen}
        />
      </CenterCardContainer>
    </PageCenter>
  );
};

export default QuizDetailsScreen;
