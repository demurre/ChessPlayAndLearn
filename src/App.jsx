import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LearnPage from "./pages/LearnPage";
import PlayPage from "./pages/PlayPage";
import MainPage from "./pages/MainPage";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/play" element={<PlayPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
