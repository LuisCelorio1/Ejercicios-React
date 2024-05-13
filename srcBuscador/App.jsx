/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Buscador } from './components/Buscador.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Buscador></Buscador>
    </div>
  )
}

export default App
