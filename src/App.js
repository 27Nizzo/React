import './App.css';
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }
  
  const decrease = () => {
    setCount(count - 1)
  }

  const setTo0 = () => {
    setCount(0)
  }
  
  return <div className="App">
    <div>
      {count}
    </div>
     <button onClick={increase}>
      <em>
        Increase
      </em>
     </button>
     <button onClick={decrease}>
      <em>
        Decrease
      </em>
     </button>
     <button onClick={setTo0}>
      <em>
        Set to 0
        </em>
     </button>
  </div>
 
}

export default App;
