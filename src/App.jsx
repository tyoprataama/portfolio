import './css/App.css'
import Experience from './elements/Experience.jsx'
import Hero from './elements/Hero.jsx'
import Nav from './elements/Nav.jsx'
import Project from './elements/Project.jsx'
import Writings from './elements/Writings'

function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <Project />
      <Experience/>
      <Writings />
    </>
  )
}

export default App
