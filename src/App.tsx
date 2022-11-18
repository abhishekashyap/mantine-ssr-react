import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>Count: {counter}</div>
      <button onClick={() => setCounter((count) => count + 1)}>Add one</button>
    </>
  );
}
