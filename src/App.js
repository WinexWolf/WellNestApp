import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BottomNavbar from "./js/navbar";
import Mood from "./js/mood"; // Import your Mood component
//import Modal from "./js/modal";
import TitleBar from "./js/titlebar";
// Tasks to complete:
// 1. Create a Header component using Material UI (AppBar)
// 2. Create a Todo Item component and customize styling using Tailwind
// 3. Create two lists: Pending and Completed Tasks with Static Props
// 4. Make the lists work with dynamic props & prop drilling
// 5. Create a Modal component for adding a new task
// 6. Persist and read state from local storage

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
 */}        <Switch>
          <Route path="/mood" component={Mood} />
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
