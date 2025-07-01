import React, { useEffect, useState } from 'react';

function CounterNum({ number = 0, initialSpeed = 100 }) {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    let handleCount = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= number) {
          clearInterval(handleCount);
          return prevCounter;
        }
        return prevCounter + 1;
      });
    }, initialSpeed);
  }, [number, initialSpeed]);

  return <span className="statistics__number ">{counter}</span>;
}

export default CounterNum;
