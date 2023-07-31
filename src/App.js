import './App.css';
import Profile from './Profile';
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="app">

      <Router>
        <Routes>

          <Route path="/" element={<Homepage/>} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
