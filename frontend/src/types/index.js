import { Dispatch, SetStateAction } from 'react';

export const ScreenTypes = {
  SplashScreen: 0,
  QuizDetailsScreen: 1,
  QuestionScreen: 2,
  ResultScreen: 3,
};

export const selectQuizTopic = (type) => {};

export const QuizContextTypes = {
  currentScreen: ScreenTypes.SplashScreen,
  setCurrentScreen: () => {},
  quizTopic: '',
  selectQuizTopic: selectQuizTopic,
  questions: [],
  setQuestions: () => {},
  result: [],
  setResult: () => {},
  timer: 0,
  setTimer: () => {},
  endTime: 0,
  setEndTime: () => {},
  quizDetails: {
    totalQuestions: 0,
    totalScore: 0,
    totalTime: 0,
    selectedQuizTopic: '',
  },
};
