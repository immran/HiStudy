import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainMenu from "./components/MainMenu";
import CoursePage from "./pages/CoursePage";
import HelpPage from "./pages/HelpPage";

const App = () => {
  return (
    <Router>
      <MainMenu />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
