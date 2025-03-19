import React, { useState } from 'react';
export default function CounterValue(){
    const [counter, setCounter] = useState(0);
  const Add = () => {
    // counter = counter + 1;

    // console.log(counter + 1);
    setCounter(counter + 1);
  };
  const Delete = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const Reset = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={Add}>Increment</button>
      <button onClick={Delete}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );

    
    

}