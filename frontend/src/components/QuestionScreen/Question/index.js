import React from 'react';
import styled from 'styled-components';
import Answer from '../Answer';
import audi from './file_example_MP3_700KB.mp3'

import eye from "../../../assets/photos/eyes.jpg";
import fire from "../../../assets/photos/fire.jpg";
import house from "../../../assets/photos/house.jpg";
import parrot from "../../../assets/photos/parrot.jpg";
import doko from "../../../assets/photos/doko.jpg";
=======


const QuestionContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  max-width: 88%;
`;

const AnswersContainer = styled.div`
  max-width: 78%;
`;

const QuestionStyle = styled.h2`
  font-size: clamp(18px, 4vw, 28px);
  font-weight: 500;
  margin-bottom: 25px;
  color: ${({theme}) => theme.colors.primaryText};
  line-height: 1.3;
`;

const ImageQuestion = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  margin-bottom: 20px;
`;

const Question = ({
  question,
  type,
  choices,
  selectedAnswer,
  handleAnswerSelection,
  description,
}) => {
  var obj;
  if (question === "eye") obj = eye;
  if (question === "fire") obj = fire;
  if (question === "house") obj = house;
  if (question === "parrot") obj = parrot;
  if (question === "doko") obj = doko;

  return (
    <QuestionContainer>

      {type === "image" ? (
        <>
          <ImageQuestion src={obj} alt="Image Question" />
          <AnswersContainer>
            {choices.map((choice, index) => (
              <Answer
                choice={choice}
                index={index}
                key={index}
                onChange={(e) => handleAnswerSelection(e, index)}
                type={type}
                selectedAnswer={selectedAnswer}
              />
            ))}
          </AnswersContainer>
        </>
      ) : type === "audio" ? (
        <>
          {/* Audio player for audio questions */}
          <audio controls>
            <source
              src="https://www.dropbox.com/home?preview=file_example_MP3_700KB.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
          <AnswersContainer>
            {choices.map((choice, index) => (
              <Answer
                choice={choice}
                index={index}
                key={index}
                onChange={(e) => handleAnswerSelection(e, index)}
                type={type}
                selectedAnswer={selectedAnswer}
              />
            ))}
          </AnswersContainer>
        </>
      ) : (
        <>
          <QuestionStyle>{question}</QuestionStyle>
          <AnswersContainer>
            {choices.map((choice, index) => (
              <Answer
                choice={choice}
                index={index}
                key={index}
                onChange={(e) => handleAnswerSelection(e, index)}
                type={type}
                selectedAnswer={selectedAnswer}
              />
            ))}
          </AnswersContainer>
        </>
      )}
    </QuestionContainer>
    {type === 'image' ? (
      <>
        <ImageQuestion src={question} alt="Image Question" />
        <AnswersContainer>
          {choices.map((choice, index) => (
            <Answer
              choice={choice}
              index={index}
              key={index}
              onChange={(e) => handleAnswerSelection(e, index)}
              type={type}
              selectedAnswer={selectedAnswer}
            />
          ))}
        </AnswersContainer>
      </>
    ) : type === 'audio' ? (
      <>
        {/* Audio player for audio questions */}
        <audio controls>
        
          <source src="https://www.dropbox.com/home?preview=file_example_MP3_700KB.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <AnswersContainer>
          {choices.map((choice, index) => (
            <Answer
              choice={choice}
              index={index}
              key={index}
              onChange={(e) => handleAnswerSelection(e, index)}
              type={type}
              selectedAnswer={selectedAnswer}
            />
          ))}
        </AnswersContainer>
      </>
    ) : (
      <>
        <QuestionStyle>{question}</QuestionStyle>
        <AnswersContainer>
          {choices.map((choice, index) => (
            <Answer
              choice={choice}
              index={index}
              key={index}
              onChange={(e) => handleAnswerSelection(e, index)}
              type={type}
              selectedAnswer={selectedAnswer}
            />
          ))}
        </AnswersContainer>
      </>
    )}
  </QuestionContainer>

  );
};

export default Question;
