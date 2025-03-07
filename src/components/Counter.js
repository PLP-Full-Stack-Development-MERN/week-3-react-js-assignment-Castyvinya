import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-4">
      <h2 className="text-lg font-bold">Counter</h2>
      <p className="text-2xl">{count}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg m-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg m-2"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
