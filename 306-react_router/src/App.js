import React from "react"
import { Routes, Route, Link} from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Error from "./components/Error"

function App() {
  return(
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>
        This is the footer and here is some sample text. Mario and Luigi were plumbers, too.  Right?
      </footer>
    </>
  )
}

export default App