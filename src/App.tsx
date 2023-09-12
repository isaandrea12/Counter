import { useState } from "react";
import "./App.css";
import { FaMinus, FaPlus } from "react-icons/fa";

function App() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App pt-5">
      <h1>Counter</h1>
      <div className="card">
        <div className="contents">
          <button className="btn btn-primary btn-lg m-5" onClick={decrement}>
            <FaMinus></FaMinus>
          </button>
          <h2 className="">{count}</h2>
          <button className="btn btn-primary btn-lg m-5" onClick={increment}>
            <FaPlus></FaPlus>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
