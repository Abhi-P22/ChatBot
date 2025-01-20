import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatWindow from "./components/ChatWindow";
import About from "./components/About";
import Header from "./components/Header";
import './index.css'

const App = () => (
  <Router>
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<About />} />
      <Route path="/bot" element={<ChatWindow />} />        
      </Routes>
    </div>
  </Router>
);

export default App;

