import React from 'react';

// Define the React component
function QuizTopics() {
  // Define the quiz topics data
  const quizTopicsData = [
    {
      title: 'React',
      icon: <ReactIcon />,
    },
    {
      title: 'JavaScript',
      icon: <JavaScript />,
    },
    {
      title: 'Python',
      icon: <Python />,
    },
    {
      title: 'Gatsby',
      icon: <Gatsby />,
      disabled: true,
    },
    {
      title: 'Angular',
      icon: <Angular />,
      disabled: true,
    },
    {
      title: 'Django',
      icon: <Django />,
      disabled: true,
    },
    {
      title: 'CSS',
      icon: <CSS />,
      disabled: true,
    },
    {
      title: 'Kotlin',
      icon: <Kotlin />,
      disabled: true,
    },
    {
      title: 'Laravel',
      icon: <Laravel />,
      disabled: true,
    },
  ];

  return (
    <div>
      <h1>Quiz Topics</h1>
      <ul>
        {quizTopicsData.map((topic, index) => (
          <li key={index}>
            <h2>{topic.title}</h2>
            {topic.icon}
            {topic.disabled && <p>Disabled</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizTopics;
