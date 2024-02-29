"use client";

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        className="ml-4, mt-2 text-2xl ml-8 font-bold px-2 rounded bg-cyan-400 hover:bg-cyan-300"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}

export default Counter;
