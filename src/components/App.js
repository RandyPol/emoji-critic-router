import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Header from './Header'
import AboutMe from './AboutMe'
import Reviews from './Reviews'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route exact path="/about-me">
        <AboutMe />
      </Route>
      <Route exact path="/reviews">
        <Reviews />
      </Route>
    </div>
  )
}

export default App
