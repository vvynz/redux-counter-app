import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);

  const increment = () => {

  }

  const decrement = () => {

  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
