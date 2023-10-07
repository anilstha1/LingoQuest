import React, {useEffect, useState} from "react";
import "./Forlanguageselect.css"; // Import your CSS file
import {useQuiz} from "../context/QuizContext";
import {ScreenTypes} from "../types";
import {useNavigate} from "react-router-dom";
import io from "socket.io-client";
import {useUser} from "../context/userContext";
// const socket = io.connect("http://localhost:3001");

const Selectlanguage = ({messages, user, users, room_creator}) => {
  const {userName, changeUserName} = useUser();
  const [selectedButton, setSelectedButton] = useState(null);
  const [startquiz, setStartquiz] = useState(false);
  const {
    setCurrentScreen,
    quizDetails,
    selectQuizTopic,
    currentScreen,
    usercontext, // Use usercontext directly from the context
    changeuser,
  } = useQuiz();

  const {selectedQuizTopic, totalQuestions, totalScore, totalTime} =
    quizDetails;
  const navigate = useNavigate();

  const handleQuestionScreen = async () => {
    console.log(users);
    const socket = io.connect("http://localhost:3001");
    socket.emit("create_room", user);
    socket.emit("start_quiz", user);

    setCurrentScreen(ScreenTypes.QuestionScreen);
    console.log(currentScreen);
    navigate("/");
  };

  useEffect(() => {
    changeUserName(user.nickname);
  }, []);
  useEffect(() => {
    console.log("User context changed:", usercontext);
    // Do something with the updated usercontext here.
  }, [usercontext]);

  const handleButtonClick = (buttonName) => {
    selectQuizTopic(buttonName);
    console.log(buttonName);
  };
  return (
    <>
      <div className="title-container">
        <h2 className="title">Select the Prefered Language</h2>
        <div className="button-container">
          <button
            className={`button ${
              selectedButton === "Newari" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Newari")}
          >
            Newari
          </button>

          <button
            className={`button ${
              selectedButton === "Magari" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Magari")}
          >
            Magari
          </button>

          <button
            className={`button ${
              selectedButton === "Bhojpuri" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Bhojpuri")}
          >
            Bhojpuri
          </button>
          <button
            className={`button ${
              selectedButton === "Santali" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Santali")}
          >
            Santali
          </button>
          <button
            className={`button ${selectedButton === "Munda" ? "selected" : ""}`}
            onClick={() => handleButtonClick("Munda")}
          >
            Munda
          </button>
        </div>
      </div>

      <div className="Person-joined">
        <table className="person-table">
          <thead>
            <tr>
              <th>Players in the room</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.nickname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        {room_creator && (
          <button className="button" onClick={handleQuestionScreen}>
            Start
          </button>
        )}
      </div>

      <div className="chat-box">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={"system-message"}>
              <strong>{message}</strong>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Selectlanguage;
