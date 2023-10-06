import "./index.css";
import Chat from "./component/chat";
import { Routes, Route } from "react-router-dom";
import Joinchat from "./component/joinchat";
import ContributionForm from "./component/ContributionForm";
import ActiveRoom from "./component/ActiveRoom/activeroom";
import { BrowserRouter as Router } from 'react-router-dom';
import MainFrame from "./MainFrame";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainFrame />} />
        <Route path="/hostroom" element={<Joinchat />} />
        <Route path="/joinroom" element={<Joinchat />} />

        <Route path="/chat" element={<Chat />} />
        <Route path="/contribute" element={<ContributionForm />} />
        <Route path="/active" element={<ActiveRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
