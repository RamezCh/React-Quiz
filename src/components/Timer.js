import { useEffect } from 'react';

function Timer({ dispatch, secondsRemaining }) {
  // 1 min is 60 secs
  const mins = Math.floor(secondsRemaining / 60);
  // Remainder after getting mins
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const timer = setInterval(() => dispatch({ type: 'tick' }), 1000);
      return () => clearInterval(timer);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && '0'}
      {mins}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
}

export default Timer;

/*
useState:

- single, independent pieces of state
- logic didrectly in event handlers or effect spread all over one or multiple components
- state update is done by calling setState
- Imperative state updates
- Easy to understand and use


useReducer:

- multiple related pieces of state and complex state
- logic update lives in central place, decoupled from components
- state updated by dispatching an action to a reducer
- declarative state updates, complex state transitions are mapped to actions
- More difficult to understand and implement


When to use useReducer:

Do we need one piece of state? Yes -> useState
No -> do they need to be updated together?
Yes -> are we willing to implement more slightly complex code? Yes -> useReducer

Basically related states or too many states
*/
