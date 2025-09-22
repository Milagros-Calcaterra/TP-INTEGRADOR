import { useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  console.log("Se monta App");

  const handleAdd = () => setCount(count + 1);
  const handleSubtract = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <>
      <h1>Eventos en React</h1>
      <h3>{count}</h3>
      
      <button onClick={handleAdd}>Suma 1</button>
      <button onClick={handleSubtract}>Resta 1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
