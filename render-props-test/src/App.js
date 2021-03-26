import React, { useState } from "react";
import "./App.css";

function IncreaseButton(props) {
  const [count, setCount] = useState(props.initialState);

  function increaseCount() {
    setCount(props.increase);
  }

  function decreaseCount() {
    setCount(props.decrease);
  }

  const data = {
    count: count,
    increase: increaseCount,
    decrease: decreaseCount,
  };

  return <div>{props.render(data)}</div>;
}

function AddingButton(props) {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.increase}>Go Up</button>
      <button onClick={props.decrease}>Go Down</button>
    </div>
  );
}

function MultiplyButton(props) {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.increase}>Go Up</button>
      <button onClick={props.decrease}>Go Down</button>
    </div>
  );
}

//App

function App() {
  return (
    <div className="App">
      <IncreaseButton
        render={(data) => AddingButton(data)}
        increase={(val) => val + 1}
        decrease={(val) => val - 1}
        initialState={0}
      />
      <IncreaseButton
        render={(data) => MultiplyButton(data)}
        increase={(val) => val * 2}
        decrease={(val) => val / 2}
        initialState={1}
      />
    </div>
  );
}

export default App;
