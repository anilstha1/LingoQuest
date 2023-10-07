// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

const quiz = {
  Newari: {
    topic: "Newari",
    level: "Intermediate",
    totalQuestions: 10,
    totalScore: 20,
    totalTime: 900,
    questions: [
      {
        question: "What does JSX stand for?",
        choices: ["JavaScript XML", "JavaScript XML Syntax", "Java XML"],
        type: "MCQs",
        correctAnswers: ["JavaScript XML"],
        score: 2,
      },
   
      {
        question: "Is React a JavaScript library for building user interfaces?",
        choices: ["Yes", "No"],
        type: "boolean",
        correctAnswers: ["Yes"],
        score: 1,
      },
      {
        question: "What is the purpose of React Router?",
        choices: [
          "To handle routing in React applications",
          "To create REST APIs",
          "To manage state in React applications",
        ],
        type: "MCQs",
        correctAnswers: ["To handle routing in React applications"],
        score: 2,
      },
      {
        question: "https://images.unsplash.com/photo-1682687980961-78fa83781450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
        choices: [
          "class MyComponent extends React.Component",
          "function MyComponent()",
          "React.createMyComponent()",
        ],
        type: "image",
        correctAnswers: ["function MyComponent()"],
        score: 2,
      },
      {
        question: "Which lifecycle method is called after a component is rendered for the first time?",
        choices: ["componentDidMount", "componentDidUpdate", "componentWillUnmount"],
        type: "MCQs",
        correctAnswers: ["componentDidMount"],
        score: 2,
      },
      {
        question: "https://drive.google.com/file/d/1vVaYaOVI-nwyF6PNXm9TPbFmX6UHM_9y/view?usp=sharing",
        choices: [
          "To manage the state of a React application",
          "To create user interfaces",
          "To handle HTTP requests",
        ],
        type: "audio",
        correctAnswers: ["To manage the state of a React application"],
        score: 2,
      },
      {
        question: "What is React primarily used for?",
        choices: [
          "Server-side scripting",
          "To create user interfaces",
          "To handle HTTP requests",
        ],
        type: "MCQs",
        correctAnswers: ["Server-side scripting"],
        score: 2,
      },
    ],
  },
  Bhojpuri: {
    topic: "Bhojpuri",
    level: "Intermediate",
    totalQuestions: 10,
    totalScore: 20,
    totalTime: 900,
    questions: [
      {
        question: "What does this stand for?",
        choices: ["JavaScript XML", "JavaScript XML Syntax", "Java XML"],
        type: "MCQs",
        correctAnswers: ["JavaScript XML"],
        score: 2,
      },
      {
        question: "Which one is a correct way to define a React component?",
        choices: [
          "class MyComponent extends React.Component",
          "function MyComponent()",
          "React.createMyComponent()",
        ],
        type: "MCQs",
        correctAnswers: ["function MyComponent()"],
        score: 2,
      },
      {
        question: "Is React a JavaScript library for building user interfaces?",
        choices: ["Yes", "No"],
        type: "boolean",
        correctAnswers: ["Yes"],
        score: 1,
      },
      {
        question: "What is the purpose of React Router?",
        choices: [
          "To handle routing in React applications",
          "To create REST APIs",
          "To manage state in React applications",
        ],
        type: "MCQs",
        correctAnswers: ["To handle routing in React applications"],
        score: 2,
      },
      {
        question: "Which lifecycle method is called after a component is rendered for the first time?",
        choices: ["componentDidMount", "componentDidUpdate", "componentWillUnmount"],
        type: "MCQs",
        correctAnswers: ["componentDidMount"],
        score: 2,
      },
      {
        question: "What is the purpose of Redux?",
        choices: [
          "To manage the state of a React application",
          "To create user interfaces",
          "To handle HTTP requests",
        ],
        type: "MCQs",
        correctAnswers: ["To manage the state of a React application"],
        score: 2,
      },
      {
        question: "What is React primarily used for?",
        choices: [
          "Server-side scripting",
          "To create user interfaces",
          "To handle HTTP requests",
        ],
        type: "MCQs",
        correctAnswers: ["Server-side scripting"],
        score: 2,
      },
    ],
  },
  Magari: {
    topic: "Magari",
    level: "Intermediate",
    totalQuestions: 10,
    totalScore: 20,
    totalTime: 900,
    questions: [
      {
        question: "What does baje stand for?",
        choices: ["JavaScript XML", "JavaScript XML Syntax", "Java XML"],
        type: "MCQs",
        correctAnswers: ["JavaScript XML"],
        score: 2,
      },
      {
        question: "Which one is a correct way to define a React component?",
        choices: [
          "class MyComponent extends React.Component",
          "function MyComponent()",
          "React.createMyComponent()",
        ],
        type: "MCQs",
        correctAnswers: ["function MyComponent()"],
        score: 2,
      },
      {
        question: "Is React a JavaScript library for building user interfaces?",
        choices: ["Yes", "No"],
        type: "boolean",
        correctAnswers: ["Yes"],
        score: 1,
      },
      {
        question: "What is the purpose of React Router?",
        choices: [
          "To handle routing in React applications",
          "To create REST APIs",
          "To manage state in React applications",
        ],
        type: "MCQs",
        correctAnswers: ["To handle routing in React applications"],
        score: 2,
      },
      {
        question: "Which lifecycle method is called after a component is rendered for the first time?",
        choices: ["componentDidMount", "componentDidUpdate", "componentWillUnmount"],
        type: "MCQs",
        correctAnswers: ["componentDidMount"],
        score: 2,
      },
      {
        question: "What is the purpose of Redux?",
        choices: [
          "To manage the state of a React application",
          "To create user interfaces",
          "To handle HTTP requests",
        ],
        type: "MCQs",
        correctAnswers: ["To manage the state of a React application"],
        score: 2,
      },
      {
        question: "What is React primarily used for?",
        choices: [
          "Server-side scripting",
          "To create user interfaces",
          "To handle HTTP requests",
        ],
        type: "MCQs",
        correctAnswers: ["Server-side scripting"],
        score: 2,
      },
    ],
  },
};

export {quiz };
