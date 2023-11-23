import './App.css';

function App() {
  return (
    <div className="App">
      <Job salary={100000} position="Senior SDE" company="Amazon" />
      <Job salary={90000} position="Junior SDE" company="Google" />
      <Job salary={80000} position="Project Manager" company="Facebook" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary} </h1>
      <h2> {props.position} </h2>
      <h1> {props.company} </h1>
    </div>
  );
}

export default App;
