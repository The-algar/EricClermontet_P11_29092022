import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/housing/:id">
          <Housing />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
