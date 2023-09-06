import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRapper from './assets/components/AppRapper/AppRapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRapper/>
    </>
  )
}

export default App
