import React, {useEffect, useState} from "react";
import styled from "styled-components";

import {Flex} from "../../../styles/Global";
import {addLeadingZero, formatTime} from "../../../utils/helpers";

import Counter from "./Counter";

const ActiveQuestionNo = styled.span`
  font-size: clamp(40px, 5vw, 60px);
  font-weight: 500;
  color: ${({theme}) => theme.colors.themeColor};
`;

const TotalQuestionNo = styled.span`
  font-size: clamp(20px, 5vw, 30px);
  font-weight: 500;
  color: ${({theme}) => theme.colors.darkerGray};
`;

const QuizHeader = ({activeQuestion, totalQuestions, timer}) => {
  const [timing, setTiming] = useState(timer);

  const decrementTimer = async () => {
    if (timing > 0) {
      await setTiming(timing - 1);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    const timerInterval = setInterval(decrementTimer, 1000);
    // console.log(timing)
    return () => clearInterval(timerInterval);
  }, [timing]);
  return (
    <Flex spaceBetween gap="6px">
      <div>
        <ActiveQuestionNo>
          {addLeadingZero(activeQuestion + 1)}
        </ActiveQuestionNo>
        <TotalQuestionNo>/{addLeadingZero(totalQuestions)}</TotalQuestionNo>
      </div>
      <Flex>
        <Counter time={`${formatTime(timing)}`} />
      </Flex>
    </Flex>
  );
};

export default QuizHeader;
