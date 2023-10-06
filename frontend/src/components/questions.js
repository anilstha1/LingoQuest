import React, {useState} from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const containerStyles = {
  position: "relative",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "50px",
};
const nextButtonStyles = {
  position: "absolute", // Add absolute positioning to the button
  bottom: "20px", // Adjust the bottom position
  right: "20px", // Adjust the right position
};
const textLeftStyles = {
  textAlign: "left", // Add left alignment for text
};
const textCenterStyles = {
  textAlign: "center", // Add center alignment for text
};

const questions = [
  {
    id: 1,
    questionText: "What is the capital of France?",
    answerOptions: [
      {id: "A", answerText: "London"},
      {id: "B", answerText: "Berlin"},
      {id: "C", answerText: "Paris"},
    ],
    correctAnswer: "C",
  },
  {
    id: 2,
    questionText: "Which planet is known as the Red Planet?",
    answerOptions: [
      {id: "A", answerText: "Venus"},
      {id: "B", answerText: "Mars"},
      {id: "C", answerText: "Jupiter"},
    ],
    correctAnswer: "B",
  },
  // Add more questions here
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    // Check if the selected answer is correct and update the score
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question or end the quiz
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      // Quiz is finished
      alert(`Quiz Finished! Your Score: ${score}/${questions.length}`);
    }
  };

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Box // Use the Box component for applying the border
        sx={{
          ...containerStyles,
          border: "1px solid #ccc", // Add the border here
        }}
        component={Paper} // Use the Paper component for applying box shadow
        elevation={3} // Control the intensity of the box shadow
      >
        <Typography variant="h4" gutterBottom sx={textCenterStyles}>
          Quiz App
        </Typography>
        <Typography variant="h6" gutterBottom sx={textCenterStyles}>
          Question {currentQuestion + 1} of {questions.length}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {questions[currentQuestion].questionText}
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            name="answer"
            value={selectedAnswer}
            onChange={handleAnswerChange}
          >
            {questions[currentQuestion].answerOptions.map((option) => (
              <FormControlLabel
                key={option.id}
                value={option.id}
                control={<Radio />}
                label={option.answerText}
                // sx={textLeftStyles}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          sx={nextButtonStyles}
          onClick={handleNextQuestion}
        >
          Next
          <NavigateNextIcon></NavigateNextIcon>
        </Button>
      </Box>
    </Container>
  );
};

export default Quiz;
