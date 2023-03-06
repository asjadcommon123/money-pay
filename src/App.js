import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login';
import Checkout from './components/Checkout';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="font-poppins">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/admin-login" element={<Login />} />
          <Route exact path="/signup" element={<Registration />} />
          <Route exact path="/admin-dashboard" element={<Dashboard />} />

          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
