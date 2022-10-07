import React from "react";
import './App.css';
import About from "./components/About";
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <About></About>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;


