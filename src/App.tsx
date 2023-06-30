/* import Button from "./components/button"; */
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </>
  );
}

export default App;

/*<Button
      handleClick={() => alert("You clicked me bitch!")}
      text="Click me bitch"
    />*/
