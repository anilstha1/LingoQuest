import React, { useState } from 'react';
import styled from 'styled-components';
import KeyboardInstructionsModal from './KeyboardLayout/KeyboardInstructionsModal';
const ContributionForm = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [questionType, setQuestionType] = useState('text'); // Default to text question
  const [selectedLanguage, setSelectedLanguage] = useState('english'); // Default language
  const [showKeyboardInstructions, setShowKeyboardInstructions] = useState(false );

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the user's contribution based on the selected question type (text, audio, or picture)
    const contribution = {
      questionType,
      question,
      options,
      correctAnswer,
    };

    // Send the user's contribution to your backend for processing

    // Clear the form
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Contribute a Quiz Question</h2>
      <div>
        <label>Language:</label>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          required
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          {/* Add more language options here */}
        </select>
      </div>
      <div>

      <button
        onClick={() => setShowKeyboardInstructions(true)}
      >
        Activate Nepali Keyboard
      </button>
      <KeyboardInstructionsModal
        isOpen={showKeyboardInstructions}
        onClose={() => setShowKeyboardInstructions(false)}
      />
        <label>Question Type:</label>
        <select
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}
          required
        >
          <option value="text">Text Question</option>
          <option value="audio">Audio Question</option>
          <option value="picture">Picture Question</option>
        </select>
      </div>
      <div>
        <label>Question:</label>
        {questionType === 'text' ? (
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        ) : questionType === 'audio' ? (
          <input type="file" accept="audio/*" />
        ) : (
          <input type="file" accept="image/*" />
        )}
      </div>
      <div>
        <label>Options:</label>
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            placeholder={`Option ${index + 1}`}
            required
          />
        ))}
      </div>
      <div>
        <label>Correct Answer:</label>
        <select
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          required
        >
          <option value="">Select the correct answer</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Submit Question</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  background-color: #523b3b;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 30px; /* Increased padding */
  max-width: 600px; /* Made it wider */
  margin: 0 auto;

  h2 {
    font-size: 1.8rem; /* Increased font size */
    margin-bottom: 20px;
  }

  div {
    margin-bottom: 15px; /* Increased margin */

    label {
      display: block;
      font-weight: bold;
    }

    input[type='file'],
    textarea,
    select {
      width: 100%;
      padding: 12px; /* Increased padding */
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1.2rem; /* Increased font size */
    }
  }

  button {
    background-color: #291212;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 12px 24px; /* Increased padding */
    font-size: 1.2rem; /* Increased font size */
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #170606;
    }
  }
`;

export default ContributionForm;
