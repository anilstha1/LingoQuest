import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import io from "socket.io-client";
import Selectlanguage from "./selectlanguage";
import {useQuiz} from "../context/QuizContext";
import {ScreenTypes} from "../types";

function Joinroom() {
  const [newmessage, setnewMessage] = useState([]);
  const [users, setUsers] = useState([]);
  const {setCurrentScreen, quizDetails, selectQuizTopic, currentScreen} =
    useQuiz();

  const location = useLocation();
  const navigate = useNavigate();

  const {state} = location;
  const user = {
    nickname: state.name,
    room: state.room,
  };
  var socket;
  useEffect(() => {
    socket = io.connect("http://localhost:3001");

    socket.emit("join_room", user);

    // receive message
    socket.on("joined", (message) => {
      setnewMessage((prevMessages) => [...prevMessages, message]);
      console.log(newmessage);
      console.log(message);
    });

    socket.on("welcome", (message) => {
      setnewMessage((prevMessages) => [...prevMessages, message]);
      console.log(message);
    });

    socket.on("usersdata", (users) => {
      setUsers(users);
      console.log(users);
    });
    socket.on("startquiz", () => {
      navigate("/");
      setCurrentScreen(ScreenTypes.QuestionScreen);
      console.log(currentScreen);
    });

    socket.on("disconnected", (user) => {
      console.log(`${user.nickname} disconnected`);
    });
    // socket.on("receive_message", (data) => {
    //   setdatalist([...datalist, data]);
    // });
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      {/* <div>{state.name}</div> */}

      <Selectlanguage
        messages={newmessage}
        user={user}
        users={users}
        room_creator={false}
      />
    </div>
  );
}

export default Joinroom;
