import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RickAndMorty from './components/RickAndMorty'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App">
      <RickAndMorty/>
    </div>
  )
}

export default App
