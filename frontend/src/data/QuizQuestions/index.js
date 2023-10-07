// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

var quiz = {
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
    ],
  },
};

async function fetchAndSetQuizData() {
  try {
    const response = await fetch("http://localhost:8000/questions/getall");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch quiz data. Status code: ${response.status}`
      );
    }

    const questions = await response.json();

    // console.log(quiz);
    for (const [key, value] of Object.entries(questions)) {
      if (key === "Newari") {
        for (const question of questions.Newari.questions) {
          quiz.Newari.questions.push(question);
        }
      } else {
        quiz[key] = value;
      }
    }
    console.log(quiz);
  } catch (error) {
    console.error("Error fetching quiz data:", error);
  }
}

// Call the function to fetch and update quiz data
// export {fetchAndSetQuizData};

document.addEventListener("DOMContentLoaded", () => {
  fetchAndSetQuizData();
});

export { quiz };
