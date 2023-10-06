

import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import { AppLogo, CheckIcon, Next, TimerIcon } from '../../config/icons';
import { useQuiz } from '../../context/QuizContext';
import { useTimer } from '../../hooks';
import { device } from '../../styles/BreakPoints';
import { PageCenter } from '../../styles/Global';
import { ScreenTypes } from '../../types';
import Button from '../ui/Button';
import ModalWrapper from '../ui/ModalWrapper';
import Question from './Question';
import QuizHeader from './QuizHeader';

const QuizContainer = styled.div`
  width: 900px;
  min-height: 500px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 10px 60px 80px 60px;
  margin-bottom: 70px;
  position: relative;
  @media ${device.md} {
    width: 100%;
    padding: 15px 15px 80px 15px;
  }
  button {
    span {
      svg {
        path {
          fill: ${({ selectedAnswer, theme }) =>
            selectedAnswer ? `${theme.colors.white}` : `${theme.colors.darkGrayText}`};
        }
      }
    }
  }
`;

const LogoContainer = styled.div`
  margin-top: 5px;
  margin-bottom:20px;
  @media ${device.md} {
    margin-top: 10px;
    margin-bottom: 20px;
    svg {
      width: 185px;
      height: 80px;
    }
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 60px;
  bottom: 30px;
  display: flex;
  gap: 20px;
  @media ${device.sm} {
    justify-content: flex-end;
    width: 90%;
    right: 15px;
  }
`;

const QuestionScreen = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [showTimerModal, setShowTimerModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);

  const {
    questions,
    setQuestions,
    quizDetails,
    result,
    setResult,
    setCurrentScreen,
    timer,
    setTimer,
    setEndTime,
  } = useQuiz();

  const currentQuestion = questions[activeQuestion];

  const { question, type, choices, correctAnswers } = currentQuestion;

  const onClickNext = () => {
    const isMatch =
      selectedAnswer.length === correctAnswers.length &&
      selectedAnswer.every((answer) => correctAnswers.includes(answer));

    setResult([...result, { ...currentQuestion, selectedAnswer, isMatch }]);

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      const timeTaken = quizDetails.totalTime - timer;
      setEndTime(timeTaken);
      setShowResultModal(true);
    }
    setSelectedAnswer([]);
  };

  const handleAnswerSelection = (e) => {
    const { name, checked } = e.target;

    if (type === 'MCQs' || type === 'boolean') {
      if (checked) {
        setSelectedAnswer([name]);
      }
    }
  };

  const handleModal = () => {
    setCurrentScreen(ScreenTypes.ResultScreen);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (showTimerModal || showResultModal) {
      document.body.style.overflow = 'hidden';
    }
  }, [showTimerModal, showResultModal]);

  useTimer(timer, quizDetails, setEndTime, setTimer, setShowTimerModal, showResultModal);

  return (
    <div class="container">
      <div class="code">
    <PageCenter>
      <LogoContainer>
        <AppLogo />
      </LogoContainer>
      <QuizContainer selectedAnswer={selectedAnswer.length > 0}>
        <QuizHeader
          activeQuestion={activeQuestion}
          totalQuestions={quizDetails.totalQuestions}
          timer={timer}
        />
        <Question
          question={question}
          choices={choices}
          type={type}
          handleAnswerSelection={handleAnswerSelection}
          selectedAnswer={selectedAnswer}
        />
        <ButtonWrapper>
          <Button
            text={activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            onClick={onClickNext}
            icon={<Next />}
            iconPosition="right"
            disabled={selectedAnswer.length === 0}
          />
        </ButtonWrapper>
      </QuizContainer>
      {(showTimerModal || showResultModal) && (
        <ModalWrapper
          title={showResultModal ? 'Done!' : 'Your time is up!'}
          subtitle={`You have attempted ${result.length} questions in total.`}
          onClick={handleModal}
          icon={showResultModal ? <CheckIcon /> : <TimerIcon />}
          buttonTitle="SHOW RESULT"
        />
      )}
    </PageCenter>
    </div>

<div className="table">
    <table>
            <thead>
                <tr>
                    <th>Players Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John Doe</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Jane Smith</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Bob Johnson</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  );
};

export default QuestionScreen;

