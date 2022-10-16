import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListItem from './components/ListItem';

const fruits = ['apple', 'orange', 'peach'];

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [inputs, setInputs] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);


  return (
    <div className="App">
      <h1>TO DO</h1>
      <div className="card">
        <input type="text" value={input} onChange={(event) => setInput(event.currentTarget.value)} />
        
        <button onClick={() => {
          setInputs([...inputs, input]);
          setInput("");
        }}>Add</button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>{inputs.map((i) => <ListItem description={i} />)}</div>
        {fruits.map((fruits) => <ListItem description={fruits} />)}
      </div>
    </div>
  )
}

export default App
