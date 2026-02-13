import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const limit = 5;

  const increase = () => {
    if (count < limit) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h1>React Counter App</h1>

      <h2>{count}</h2>

      <div>
        <button 
          onClick={increase} 
          disabled={count >= limit}
        >
          Increase
        </button>

        <button 
          onClick={decrease} 
          disabled={count === 0}
        >
          Decrease
        </button>

        <button onClick={reset}>
          Reset
        </button>
      </div>

      {/* Show warning when limit reached */}
      {count >= limit && (
        <p style={{ color: "red" }}>
          ⚠ Maximum limit reached!
        </p>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
};

export default App;
