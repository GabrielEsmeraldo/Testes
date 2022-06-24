import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    console.log('Use Effect foi executado!')
  }, [])

  return (
    <div>Hello!</div>
  )
}

export default App
