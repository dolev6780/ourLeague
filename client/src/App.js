import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import './App.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import NewTournament from './pages/NewTournament';
import NewLeague from './pages/NewLeague';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/createnewtournament" element={<NewTournament />} />
          <Route path="/createnewleague" element={<NewLeague />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
