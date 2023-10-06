import {useEffect, useState} from "react";
import {user} from "./joinchat";
import io from "socket.io-client";
var socket;
function Chat() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [datalist, setdatalist] = useState([]);
  useEffect(() => {
    socket = io.connect("http://localhost:3001");

    console.log("success");
    //join room
    socket.emit("join_room", user);

    // receive message
    socket.on("joined", (message) => {
      console.log(message);
    });

    socket.on("welcome", (message) => {
      console.log(message);
    });

    socket.on("usersdata", (users) => {
      console.log(users);
    });

    // socket.on("receive_message", (data) => {
    //   setdatalist([...datalist, data]);
    // });
    return () => {
      socket.close();
    };
  }, [datalist]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messagedata = {
        username: user.username,
        id: user.id,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      setdatalist([...datalist, messagedata]);
      console.log(datalist);
      await socket.emit("send_message", messagedata);
    }
    Event.preventdefault();
  };

  return (
    <>
      <div className="login">
        <div className="container">
          <div className="message_output">
            {datalist.map((data) => {
              return (
                <div>
                  {data.username === user.username ? (
                    <div>
                      <div className="messagelist">{data.message}</div>
                      <div className="details">{data.time}</div>
                    </div>
                  ) : (
                    <div>
                      <div className="messagelist">{data.message}</div>
                      <div className="details">{data.time}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => {
                setCurrentMessage(e.target.value);
              }}
            />

            <button onClick={sendMessage}>send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
