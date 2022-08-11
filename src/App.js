import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter App</h1>
    </div>
  );
}

export default App;
