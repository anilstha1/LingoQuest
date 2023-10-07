import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import io from "socket.io-client";
import Selectlanguage from "./selectlanguage";

function Hostroom() {
  const [newmessage, setnewMessage] = useState([]);
  const [users, setUsers] = useState([]);

  const location = useLocation();

  const {state} = location;
  const user = {
    nickname: state.name,
    room: state.room,
  };
  var socket;
  useEffect(() => {
    socket = io.connect("http://localhost:3001");

    socket.emit("create_room", user);

    // receive message
    socket.on("joined", (message) => {
      setnewMessage((prevMessages) => [...prevMessages, message]);
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
      {/* {newmessage.map((message) => {
        return <div>{message}</div>;
      })}
      <div>hello</div> */}
      <Selectlanguage
        messages={newmessage}
        user={user}
        users={users}
        room_creator={true}
      />
    </div>
  );
}

export default Hostroom;
