import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <div className="App"></div>
        {/*         <TitleBar showBackButton />
         */}{" "}
        <Switch>
          <Route path="/mood" component={Mood0} />
          <Route path="/mood1" component={Mood1} />
          <Route path="/mood2" component={Mood2} />
          <Route path="/mood3" component={Mood3} />
        </Switch>
        <BottomNavbar />
      </>
    </Router>
    // <Router>

    // {/*
    //         {/*             <h1 className="text-3xl font-bold underline">Hello world!</h1>
    //          */}
    //         {/*  <Modal
    //           modalText="Your Mood Data is Successfully Shared on WhatsApp"
    //           showCancelButton
    //           onCancel={handleCancel}
    //         /> */}
    //         <TitleBar showBackButton />

    //         <BottomNavbar />
    //       </div>
    //           </Router> */}
  );
}

export default App;
