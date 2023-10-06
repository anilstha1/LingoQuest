import "../App.css";
import {useState} from "react";
import {Link} from "react-router-dom";
var user;

function Joinchat() {
  const [username, setUsername] = useState("");
  const [id, setid] = useState("");
  function create_chat() {
    user = {
      nickname: username,
      room: id,
      roomcreater: true,
    };
  }
  function join_chat() {
    user = {
      nickname: username,
      room: id,
      roomcreater: false,
    };
  }
  return (
    <>
      <div className="login">
        <div className="box">
          <div>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="id"
              onChange={(e) => {
                setid(e.target.value);
              }}
            />
            <Link to="/chat">
              <button onClick={create_chat}>create chat</button>
            </Link>
            <Link to="/chat">
              <button onClick={join_chat}>join chat</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export {user};
export default Joinchat;
