import Contact from './components/Contact'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Flip from 'react-reveal/Flip'
import Zoom from 'react-reveal/Zoom'
import Reveal from 'react-reveal/Reveal'
import Navbar from './components/Navbar'
import 'semantic-ui-css/semantic.min.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Reveal>
        <Landing />
      </Reveal>

      <About />

      <Zoom>
        <Projects />
      </Zoom>

      <Flip>
        <Contact />
      </Flip>
    </div>
  )
}

export default App
