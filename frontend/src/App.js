import "./index.css";
import Chat from "./component/chat";
import {Routes, Route} from "react-router-dom"; 
import ContributionForm from "./component/ContributionForm";
import ActiveRoom from "./component/ActiveRoom/activeroom";
import {BrowserRouter as Router} from "react-router-dom";
import MainFrame from "./MainFrame";
import Hostroom from "./component/hostroom";
import Joinroom from "./component/joinroom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainFrame />} />
        <Route path="/hostroom" element={<Hostroom />} />
        <Route path="/joinroom" element={<Joinroom />} />

        <Route path="/chat" element={<Chat />} />
        <Route path="/contribute" element={<ContributionForm />} />
        <Route path="/active" element={<ActiveRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
