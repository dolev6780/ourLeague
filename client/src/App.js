import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import './App.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import CreateContest from './pages/CreateContest';
function App() {
  const [getPath, setGetPath] = useState("/");
  const [getTitle, setTitle] = useState("");
  const [getMembersOption, setGetMembersOption] = useState("");
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage setGetPath={setGetPath} setTitle={setTitle} setGetMembersOption={setGetMembersOption}/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path={`/${getPath}`} element={<CreateContest getTitle={getTitle} getMembersOption={getMembersOption}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
