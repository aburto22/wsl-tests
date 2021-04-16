import "./App.css";
import axios from "axios";

function App() {
  const handleClick = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_SERVER + "/")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={handleClick}
          href="#"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
