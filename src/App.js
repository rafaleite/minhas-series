import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Menu from './Menu'
import Home from './Home'

const About = () => <section className="intro-section"> <h2>Sobre ...</h2> </section>

class App extends Component {

  render() {
    return (
      <div>
        
        <Router>
          
          <div>
            <Menu />
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
