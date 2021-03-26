import React, { useState } from "react";
import "./App.css";

function useCounter(data) {
  const [count, setCount] = useState(data.initialState);

  function increaseCount() {
    setCount(data.increase);
  }

  function decreaseCount() {
    setCount(data.decrease);
  }

  return [count, increaseCount, decreaseCount];
}

const dataAdd = {
  initialState: 0,
  increase: (val) => val + 1,
  decrease: (val) => val - 1,
};

const dataMul = {
  initialState: 1,
  increase: (val) => val * 2,
  decrease: (val) => val / 2,
};

function AddingButton(props) {
  const [count, increase, decrease] = useCounter(dataAdd);
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Go Up</button>
      <button onClick={decrease}>Go Down</button>
    </div>
  );
}

function MultiplyButton(props) {
  const [count, increase, decrease] = useCounter(dataMul);
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Go Up</button>
      <button onClick={decrease}>Go Down</button>
    </div>
  );
}

//App

function App() {
  return (
    <div className="App">
      <AddingButton />
      <MultiplyButton />
    </div>
  );
}

export default App;
