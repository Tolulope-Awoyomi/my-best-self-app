import React, { useEffect, useState } from 'react';

function PhysicalActivity() {
  const [count, setCount] = useState(1200);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  function handleStart() {
    setIsRunning(true);
  };

  function handlePause() {
    setIsRunning(false);
  };

  function handleRestart() {
    setCount(1200);
    setIsRunning(true);
  };

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />

      <div>
        <h1 className='workout'> Workout for 20 minutes - Let's do this!</h1>
      </div>
      
      <div>
        <h4 className='workout'> You can do this!</h4>
        <h2 className='workout1'>
          <em>
            {minutes.toString().padStart(2, '0')}:
            {seconds.toString().padStart(2, '0')} minutes left!
          </em>
        </h2>
      </div>
      
      <div className='workout2'>
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
