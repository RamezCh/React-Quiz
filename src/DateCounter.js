import { useReducer, useState } from 'react';

// useReducer takes fn & initial state
function reducer(state, action) {
  // Whatever we return becomes the new state
  if (action.type === 'inc') return state + action.payload;
  if (action.type === 'dec') return state - action.payload;
  if (action.type === 'setCount') return action.payload;
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // returns state and fn
  const [count, dispatch] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  const dec = function () {
    // dispatch usually takes type and payload
    dispatch({ type: 'dec', payload: -step });
    // setCount((count) => count - 1);
    // setCount(count => count - step);
  };

  const inc = function () {
    // dispatch usually takes type and payload
    dispatch({ type: 'inc', payload: step });
    // setCount((count) => count + 1);
    // setCount(count => count + step);
  };

  const defineCount = function (e) {
    // dispatch usually takes type and payload
    dispatch({ type: 'setCount', payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
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
