import "./index.css";
import Chat from "./components/chat";
import {Routes, Route} from "react-router-dom";
import Joinchat from "./components/joinchat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Joinchat />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
