import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {
  const [id, setID] = useState("")
  const [name, setName] = useState("")
  const [position, setPosition] = useState("")
  const [salary, setSalary] = useState(0)
  const [manager, setManager] = useState("")

  const addEmployee = () => {
    Axios.post('http://localhost:3001/create', {
      id: id,
      name: name,
      position: position,
      salary: salary,
      manager: manager,
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Id:</label>
        <input type="text"
          onChange={(event) => {
            setID(event.target.value);
          }}
        />
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
        <button onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
