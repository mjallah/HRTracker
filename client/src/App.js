import './App.css';

function App() {
  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" />
        <label>Position:</label>
        <input type="text" />
        <label>Salary:</label>
        <input type="number" />
        <label>Manager:</label>
        <input type="text" />
        <button>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
