import { useState, useEffect } from 'react'
import loader from '../src/images/nba.gif'
import Contact from './components/Contact'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Flip from 'react-reveal/Flip'
import Zoom from 'react-reveal/Zoom'

import Navbar from './components/Navbar'
import 'semantic-ui-css/semantic.min.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 7100)
  }, [])
  return (
    <div className="App">
      {loading ? (
        <>
          <img style={{width: "100vw", height: "100vh"}} src={loader} alt="loader"/>
        </>
      ) : (
        <>
          <Navbar />

          <Landing />

          <About />

          <Zoom>
            <Projects />
          </Zoom>

          <Flip>
            <Contact />
          </Flip>
        </>
      )}
    </div>
  )
}

export default App
