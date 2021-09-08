import { useState, useMemo } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [themeOn, setThemeOn] = useState(false);
  function slowFunction(num) {
    for (let i = 0; i < 100000000; i++) {
      const result = num * 2;

      return num * 2;
    }
  }
  function themeHandler() {
    setThemeOn((prevState) => !prevState);
  }
  const numberCalculated = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div
      style={{
        backgroundColor: themeOn ? 'black' : 'white',
        color: themeOn ? 'white' : 'black',
      }}
    >
      <h1>Counter</h1>
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        type="number"
        placeholder="enter number"
      />
      <button onClick={themeHandler}>Toggle theme</button>
      <h2>{numberCalculated}</h2>
    </div>
  );
}
