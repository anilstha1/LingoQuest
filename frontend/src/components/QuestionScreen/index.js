import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import {useUser} from "../../context/userContext";
import styled from "styled-components";
import {AppLogo, CheckIcon, Next, TimerIcon} from "../../config/icons";
import {useQuiz} from "../../context/QuizContext";
import {useTimer} from "../../hooks";
import {device} from "../../styles/BreakPoints";
import {PageCenter} from "../../styles/Global";
import {ScreenTypes} from "../../types";
import Button from "../ui/Button";
import ModalWrapper from "../ui/ModalWrapper";
import Question from "./Question";
import QuizHeader from "./QuizHeader";
import Modal from "./Modal";

const CenteredModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;

  &.modal-open {
    opacity: 1;
    pointer-events: auto;
  }
`;

const QuizContainer = styled.div`
  width: 900px;
  min-height: 500px;
  background: ${({theme}) => theme.colors.white};
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
          fill: ${({selectedAnswer, theme}) =>
            selectedAnswer
              ? `${theme.colors.white}`
              : `${theme.colors.darkGrayText}`};
        }
      }
    }
  }
`;

const LogoContainer = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
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
  const [users, setusers] = useState([]);
  const {userName, totalScore, changetotalScore} = useUser();
  const [iscalled, setIscalled] = useState(true);
  const [showTimerModal, setShowTimerModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [isMatched, setIsMatched] = useState(false);
  const [isNotmatched, setIsNotMatched] = useState(false);
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

  const {question, type, choices, correctAnswers} = currentQuestion;

  const onClickNext = () => {
    const isMatch =
      selectedAnswer.length === correctAnswers.length &&
      selectedAnswer.every((answer) => correctAnswers.includes(answer));

    setResult([...result, {...currentQuestion, selectedAnswer, isMatch}]);
    setIsMatched(isMatch);
    setIsNotMatched(!isMatch);

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
    const {name, checked} = e.target;

    if (
      type === "MCQs" ||
      type === "boolean" ||
      type === "image" ||
      type === "audio"
    ) {
      if (checked) {
        setSelectedAnswer([name]);
      }
    }
  };

  const handleModal = () => {
    setCurrentScreen(ScreenTypes.ResultScreen);
    document.body.style.overflow = "auto";
  };
  const handleShowModal = () => {
    setIsMatched(true);
  };

  const handleCloseModal = () => {
    setIsMatched(false);
  };
  const handleshowmodelcorrect = () => {
    setIsNotMatched(true);
  };
  const handleclosemodelcorrect = () => {
    setIsNotMatched(false);
  };

  useEffect(() => {
    if (isMatched) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }
  }, [isMatched]);
  useEffect(() => {
    if (isNotmatched) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }
  }, [isNotmatched]);

  useEffect(() => {
    if (showTimerModal || showResultModal) {
      document.body.style.overflow = "hidden";
    }
  }, [showTimerModal, showResultModal]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      axios
        .get("http://localhost:8000/users/get")
        .then((response) => {
          // Handle the successful response here
          console.log("Data:", response.data);
          const userdata = response.data;

          const uniqueNicknames = {};
          const result = [];

          for (const obj of userdata) {
            if (!uniqueNicknames[obj.nickname]) {
              uniqueNicknames[obj.nickname] = true;
              result.push(obj);
            }
          }
          console.log(result);
          setusers(result);
        })
        .catch((error) => {
          // Handle any errors here
          console.error("Error:", error);
        });
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [users]);

  useTimer(
    timer,
    quizDetails,
    setEndTime,
    setTimer,
    setShowTimerModal,
    showResultModal
  );
  const increase_score = () => {
    if (iscalled) {
      console.log("increase score called");
      changetotalScore(totalScore + 10);
      // totalScore += 10;
      const user = {
        nickname: userName,
        room: "123",
        totalScore: totalScore,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(user), // Convert data to JSON format
      };

      // Make the POST request
      fetch("http://localhost:8000/users/add", requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json(); // Parse the response JSON if needed
        })
        .then((data) => {
          // Handle the successful response and JSON data here
          console.log("Data:", data);
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error("Error:", error);
        });
      setIscalled(false);
    }
  };

  return (
    <div className="container">
      <div className="code">
        {userName}
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
                text={
                  activeQuestion === questions.length - 1 ? "Finish" : "Next"
                }
                onClick={onClickNext}
                icon={<Next />}
                iconPosition="right"
                disabled={selectedAnswer.length === 0}
              />
            </ButtonWrapper>
          </QuizContainer>
          {isMatched && increase_score()}
          {isMatched && (
            <Modal
              show={handleShowModal}
              onClose={handleCloseModal}
              status={1}
            />
          )}
          {isNotmatched && (
            <Modal
              show={handleshowmodelcorrect}
              onClose={handleclosemodelcorrect}
              status={0}
            />
          )}
          {(showTimerModal || showResultModal) && (
            <ModalWrapper
              title={showResultModal ? "Done!" : "Your time is up!"}
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
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.nickname}</td>
                  <td>{user.totalScore}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionScreen;
