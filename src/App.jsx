import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ComponenteInfo from './components/ComponenteInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
      <ComponenteInfo></ComponenteInfo>
        
        <p> React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
      
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
         
        </p>
      </header>
    </div>
  )
}

export default App
