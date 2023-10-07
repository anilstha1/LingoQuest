// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

var quiz;

async function fetchAndSetQuizData() {
  try {
    const response = await fetch("http://localhost:8000/questions/getall");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch quiz data. Status code: ${response.status}`
      );
    }

    const questions = await response.json();
    quiz = JSON.parse(questions);
    console.log(quiz);
  } catch (error) {
    console.error("Error fetching quiz data:", error);
  }
}

// Call the function to fetch and update quiz data
export {fetchAndSetQuizData};

export { quiz };
