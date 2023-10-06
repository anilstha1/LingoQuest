import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import io from "socket.io-client";

function Joinroom() {
  const [newmessage, setnewMessage] = useState([]);
  const location = useLocation();

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
      console.log(users);
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
      <div>{state.name}</div>
      {newmessage.map((message, index) => {
        return <li key={index}>{message}</li>;
      })}
      <div>hello</div>
    </div>
  );
}

export default Joinroom;
