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
