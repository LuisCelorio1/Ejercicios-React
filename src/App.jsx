/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Contador } from './components/Contador'
import { ListaOvejas } from './components/ListaOvejas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Contador></Contador>
    </div>
  )
}

export default App
