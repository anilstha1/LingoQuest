import React from 'react';

// Define the React component
function QuizComponent() {
  // Define the quiz data
  const quizData = {
    topic: 'React',
    level: 'Intermediate',
    totalQuestions: 6,
    totalScore: 45,
    totalTime: 180,
    questions: [
      {
        question: 'What is JSX in React?',
        choices: [
          'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
          'A state management library for React applications',
          'A build tool for bundling React applications',
          'A testing framework for React components',
        ],
        type: 'MCQs',
        correctAnswers: [
          'A syntax extension for JavaScript that allows writing HTML-like code in JavaScript',
        ],
        score: 10,
      },
      {
        question: 'React components must always return a single JSX element.',
        choices: ['True', 'False'],
        type: 'boolean',
        correctAnswers: ['True'],
        score: 5,
      },
      // Add more questions here...
    ],
  };

  return (
    <div>
      <h1>{quizData.topic} Quiz</h1>
      <h2>Level: {quizData.level}</h2>
      <p>Total Questions: {quizData.totalQuestions}</p>
      <p>Total Score: {quizData.totalScore}</p>
      <p>Total Time: {quizData.totalTime} seconds</p>
      <ol>
        {quizData.questions.map((question, index) => (
          <li key={index}>
            <p>{question.question}</p>
            <ul>
              {question.choices.map((choice, choiceIndex) => (
                <li key={choiceIndex}>{choice}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default QuizComponent;
