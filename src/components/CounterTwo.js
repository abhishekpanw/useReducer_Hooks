import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "increment(5)":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement(5)":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "increment(6)":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement(6)":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count = {state.firstCounter}</h1>
      <h1>Count = {state.secondCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "increment(5)", value: 5 })}>
        Increment + 5
      </button>
      <button onClick={() => dispatch({ type: "decrement(5)", value: 5 })}>
        decrement - 5
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "increment(6)", value: 6 })}>
        Increment + 6
      </button>
      <button onClick={() => dispatch({ type: "decrement(6)", value: 6 })}>
        decrement - 6
      </button>
      <button onClick={() => dispatch({ type: "reset", value: 0 })}>
        Reset
      </button>
    </div>
  );
}

export default CounterTwo;
