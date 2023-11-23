import "./App.css";
import BottomNavbar from "./js/navbar";
// Tasks to complete:
// 1. Create a Header component using Material UI (AppBar)
// 2. Create a Todo Item component and customize styling using Tailwind
// 3. Create two lists: Pending and Completed Tasks with Static Props
// 4. Make the lists work with dynamic props & prop drilling
// 5. Create a Modal component for adding a new task
// 6. Persist and read state from local storage

function App() {
    return (
        <div className="App">
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <BottomNavbar/>
        </div>
    );
}

export default App;
