import React from 'react';
import styled, { css } from 'styled-components';
import  {device}  from '../../../styles/BreakPoints';

const AnswerStyle = styled.div`
  font-size: clamp(18px, 4vw, 16px);
  color: ${({ theme }) => theme.colors.secondaryText};
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  margin-top: clamp(13px, calc(10px + 6 * ((100vw - 600px) / 1320)), 16px);
  cursor: pointer;

  @media ${device.md} {
    font-weight: 500;
  }
`;

const AnswerLabel = styled.label`
  padding: 16px;
  display: flex;
  cursor: pointer;

  @media ${device.md} {
    padding: 14px;
  }
`;

const ChoiceLabel = styled.span``;

const Answer = ({ onChange, index, choice, type, selectedAnswer }) => {
  const label = String.fromCharCode(65 + index);

  return (
    <AnswerStyle key={index}>
      <AnswerLabel>
        <ChoiceLabel>{label}.</ChoiceLabel>
        <input
          name={choice}
          type="radio"
          checked={selectedAnswer.includes(choice)}

          onChange={onChange}
        />
        {choice}
        {console.log(selectedAnswer)}
      </AnswerLabel>
    </AnswerStyle>
  );
};

export default Answer;



