import './App.css';
import { useState } from "react";

function App() {

  const [name, setName] = useState("")
  const [position, setPosition] = useState("")
  const [salary, setSalary] = useState(0)
  const [manager, setManager] = useState("")

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Position:</label>
        <input type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Salary:</label>
        <input type="number"
          onChange={(event) => {
            setSalary(event.target.value);
          }}
        />
        <label>Manager:</label>
        <input type="text"
          onChange={(event) => {
            setManager(event.target.value);
          }}
        />
        <button>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
