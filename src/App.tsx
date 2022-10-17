import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListItem from './components/ListItem';
import DisplayEmpty from './components/DisplayEmpty';


function App() {
  const [input, setInput] = useState("");
  const [inputs, setInputs] = useState<string[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const removeInput = (content: string) => {
    const removeArr = [...inputs].filter(input => content !== input);

    setInputs(removeArr);
  }

  useEffect(() => {
    if (inputs.length === 0) {
      setIsEmpty(true)
    } else {
      setIsEmpty(false) 
    }
  }, [inputs])
  return (
    <div className="App">
      <h1>TO DO</h1>
      <div className="card">
        <input type="text" value={input} 
        onChange={(event) => setInput(event.currentTarget.value)} />
        <button style={{margin:10}} onClick={() => {
          if (input) {
          setInputs([...inputs, input]);
          setInput("");
          }
        }}>Add</button>
        <div id="list">{inputs.map((i) =><ListItem description={i} removeInput={removeInput}/>)}
        
        <DisplayEmpty isEmpty={isEmpty}/>
        
        </div>
      </div>
    </div>
  )
}

export default App
