import { useReducer } from 'react';
// Usually we pass initial state as an obj
const initialState = { count: 0, step: 1 };
// useReducer takes fn & initial state
function reducer(state, action) {
  // Whatever we return becomes the new state
  // we need to return obj with same shape as initialState
  switch (action.type) {
    case 'dec':
      return { ...state, count: state.count - state.step };

    case 'inc':
      return { ...state, count: state.count + state.step };

    case 'setCount':
      return { ...state, count: action.payload };

    case 'setStep':
      return { ...state, step: action.payload };

    case 'reset':
      return initialState;

    default:
      throw new Error('Unknown action');
  }
}

function DateCounter() {
  // returns state and fn
  const [state, dispatch] = useReducer(reducer, initialState);
  // destructuring from state
  const { count, step } = state;
  // This mutates the date object.
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  const dec = function () {
    // dispatch usually takes type and payload
    dispatch({ type: 'dec', payload: step });
  };

  const inc = function () {
    // dispatch usually takes type and payload
    dispatch({ type: 'inc', payload: step });
  };

  const defineCount = function (e) {
    // dispatch usually takes type and payload
    dispatch({ type: 'setCount', payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: 'setStep', payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: 'reset' });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

/*
Managing state with useReducer

why useReducer?

An alternative way of setting state, ideal for complex state and related pieces of state

Stores related pieces of state in a state object

useReducer needs reducer: fn containing all logic to update state. Decouples state logic from component

reducer: pure function (no side effects!) that takes current state and action, and returns the next state

action: object that describes how to update state

dispatch: fn to trigger state updates, by "sending" actions from event handlers to the reducer


- State Management with useState is not enough in certain Situations:

1. When components have a lot of state variables and state updates, spread across many event handlers all over the component.

2. Multiple state updates need to happen at the same time (as a reaciton to the same event, like 'starting a game')

3. When updating one piece of state depends on one or multiple other piece of state

In All these situations, useReducer can really help.

Just like array.reduce(), reducers accumulate('reduce') actions over time

State(what needs to be updated)
Reducer(Who makes the update)
Dispatcher(Who requests the update)
Action(How to make the update)
*/
