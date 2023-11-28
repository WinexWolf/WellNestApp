import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BottomNavbar from "./js/navbar";
import Mood0 from "./js/mood0";
import Mood1 from "./js/mood1";
import Mood2 from "./js/mood2";
import Mood3 from "./js/mood3";

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
          </Routes>
          <BottomNavbar />
        </div>
      </>
    </Router>
  );
}

export default App;
