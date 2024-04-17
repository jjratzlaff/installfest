import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <form>
        <label>NAME</label>
        <input name="name" />
        <label>EMOTION</label>
        <select name="emotion">
          <option value="😁">Happy</option>
          <option value="😐">Neutral</option>
          <option value="😠">Angry</option>
        </select>
      </form>
  )
}

export default App
