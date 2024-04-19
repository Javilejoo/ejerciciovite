import { useState, useEffect } from 'react'
import './App.css'
import Router from './components/router'


function App() {
  const [rutaActual, setRutaActual] = useState('app')

  useEffect(() => {
    console.log("Se ha montado el componente")
    console.log("RUTA ACTUAL: ", window.location.pathname);
    setRutaActual(window.location.pathname)
    console.log(window.location);
  }, [])

  return (
    <div>
      <div>
        <a href="/login">Login</a>
      </div>
      <div>
          <Router ruta={rutaActual}></Router> 
      </div>
    </div>
  )

}

export default App
