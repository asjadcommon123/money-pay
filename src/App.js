import Login from "../src/pages/Login";
import Registration from "./pages/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="font-poppins">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/admin-login" element={<Login />} />
          <Route exact path="/signup" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
