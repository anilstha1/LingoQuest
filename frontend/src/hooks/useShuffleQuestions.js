import { useEffect } from 'react';

import { useQuiz } from '../context/QuizContext';
import { ScreenTypes } from '../types';
import { shuffleArray } from '../utils/helpers';

const useShuffleQuestions = () => {
  const { setQuestions, currentScreen, questions } = useQuiz();

  useEffect(() => {
    if (currentScreen === ScreenTypes.QuizDetailsScreen) {
      setQuestions(shuffleArray(questions));
    }
  }, [currentScreen, setQuestions, questions]);
};

export default useShuffleQuestions;
