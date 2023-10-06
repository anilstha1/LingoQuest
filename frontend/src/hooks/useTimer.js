import { useEffect } from 'react';

const useTimer = (
  timer,
  quizDetails,
  setEndTime,
  setTimer,
  setShowTimerModal,
  showResultModal
) => {
  useEffect(() => {
    if (timer <= 0 && !showResultModal) {
      const timeTaken = quizDetails.totalTime;
      setEndTime(timeTaken);
      setShowTimerModal(true);
      setTimer(0);
    }
  }, [timer, showResultModal, quizDetails.totalTime, setEndTime, setShowTimerModal, setTimer]);

  useEffect(() => {
    if (!showResultModal && timer > 0) {
      const countTimer = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearTimeout(countTimer);
    }
  }, [timer, showResultModal, setTimer]);
};

export default useTimer;
