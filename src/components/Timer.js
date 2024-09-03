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
