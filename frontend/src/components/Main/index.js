
import { useEffect } from 'react';
import { useQuiz } from '../../context/QuizContext';
import { ScreenTypes } from '../../types';

import QuestionScreen from '../QuestionScreen';
import QuizDetailsScreen from '../QuizDetailsScreen';
import ResultScreen from '../ResultScreen';
import SplashScreen from '../SplashScreen';

function Main() {
  const { currentScreen, setCurrentScreen } = useQuiz();

  useEffect(() => {
    let timeoutDuration = 1000; 
  
    if (currentScreen === ScreenTypes.QuestionScreen || currentScreen === ScreenTypes.ResultScreen) {
      timeoutDuration = 100000; 
    }
    const timeout = setTimeout(() => {
      setCurrentScreen(ScreenTypes.QuizDetailsScreen);
    }, timeoutDuration);
  
    return () => clearTimeout(timeout);
  }, [currentScreen, setCurrentScreen]);

  const screenComponents = {
    [ScreenTypes.SplashScreen]: SplashScreen(),
    [ScreenTypes.QuizDetailsScreen]: QuizDetailsScreen(),
    [ScreenTypes.QuestionScreen]: QuestionScreen(),
    [ScreenTypes.ResultScreen]: ResultScreen(),
  };

  const ComponentToRender = screenComponents[currentScreen] || SplashScreen();

  return ComponentToRender;
}

export default Main;
