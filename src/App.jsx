import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>Counter Application</h1>
      <div className="card">
        <p className="count-label">Count</p>
        <h2 className="count-value">{count}</h2>
        <div className="buttons">
          <button className="btn increment" onClick={increment}>Increment</button>
          <button className="btn decrement" onClick={decrement}>Decrement</button>
          <button className="btn reset" onClick={reset}>Reset</button>
        </div>
        {count === 0 && (
          <p className="note">⚠️ Count cannot go below 0</p>
        )}
      </div>
    </div>
  );
}
