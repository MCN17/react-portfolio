import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from "./components/About";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";


function App() {
  
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <main>
          <Routes>
            <Route path="/" element={<About></About>}></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/resume" element={<Resume></Resume>}></Route>
          </Routes>
        </main>
       
      </div>
    </Router>
  );
}

export default App;


