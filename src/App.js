import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BottomNavbar from "./js/navbar";
import Mood0 from "./js/mood0";
import Mood1 from "./js/mood1";
import Mood2 from "./js/mood2";
import Mood3 from "./js/mood3";
import Mood4 from "./js/mood4";
import Mood5 from "./js/mood5";
import Mood6 from "./js/mood6";
import Mood7 from "./js/mood7";
import Mood8 from "./js/mood8";


function App() {
  const handleCancel = () => {
    console.log("Cancel button clicked!");
    // Add your cancel logic here
  };

  return (
    <Router>
      <>
        <div className="App">
          {/* Add your other components or content here */}
          <Routes>
            <Route path="/mood" element={<Mood0 />} />
            <Route path="/mood1" element={<Mood1 />} />
            <Route path="/mood2" element={<Mood2 />} />
            <Route path="/mood3" element={<Mood3 />} />
            <Route path="/mood4" element={<Mood4 />} />
            <Route path="/mood5" element={<Mood5 />} />
            <Route path="/mood6" element={<Mood6 />} />
            <Route path="/mood7" element={<Mood7 />} />
            <Route path="/mood8" element={<Mood8 />} />
          </Routes>
          <BottomNavbar />
        </div>
      </>
    </Router>
  );
}

export default App;
