import React, { useState } from "react";
import "./App.css";

function WithCounter(WrappedComponent) {
  return function WithCounterComponent({ data, ...props }) {
    WithCounterComponent.displayName = `WithCounter(${getDisplayName(
      WrappedComponent
    )})`;

    const [count, setCount] = useState(data.initialState);

    function increase() {
      setCount(data.increase(count));
    }

    function decrease() {
      setCount(data.decrease(count));
    }

    return (
      <WrappedComponent
        count={count}
        increase={increase}
        decrease={decrease}
        {...props}
      />
    );
  };
}

function CountGroup(props) {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.increase}>Go Up {props.text}</button>
      <button onClick={props.decrease}>Go Down</button>
    </div>
  );
}

const BtnWithCounter = WithCounter(CountGroup);

function AddingButton() {
  const data = {
    initialState: 0,
    increase: (val) => val + 1,
    decrease: (val) => val - 1,
  };
  return <BtnWithCounter data={data} text={"Come up!"} />;
}

function MultiplyButton() {
  const data = {
    initialState: 1,
    increase: (val) => val * 2,
    decrease: (val) => val / 2,
  };
  return <BtnWithCounter data={data} />;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
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
