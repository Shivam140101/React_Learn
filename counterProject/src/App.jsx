import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(2);

  //let counter = 5;

  const addValue = () => {
    if (counter < 20) setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>remove Value {counter}</button>
      <br />
      <br />
      <footer>footer: {counter}</footer>
    </>
  );
}

export default App;
