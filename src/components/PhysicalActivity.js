import React, { useEffect, useState, useRef } from 'react';

function PhysicalActivity() {
  const [count, setCount] = useState(1200);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleRestart = () => {
    setCount(1200);
    setIsRunning(true);
  };

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  return (
    <>
      <br />
      <div>
        <h2>20 minutes workout - Let's do this!</h2>
      </div>
      <br />
      <div>
        <h3>You can do this!</h3>
        <h4>
          <em>
            {minutes.toString().padStart(2, '0')}:
            {seconds.toString().padStart(2, '0')} minutes left!
          </em>
        </h4>
      </div>
      <br />
      <div>
        {!isRunning ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleRestart}>Restart</button>
          </>
        )}
      </div>
    </>
  );
}

export default PhysicalActivity;
