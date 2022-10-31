import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Housing from './pages/Housing'
// import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }
    // body {
    //   min-width: 395px;
    //   box-sizing: border-box;
    //   margin: 0 10px 0;
    //     @media screen and (min-width: 991px) {
    //       max-width: 1440px;
    //       margin: 0 100px 0 !important;
    // }
    .hide {
    display: none;
    }
`
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/housing/:id">
          <Housing />
        </Route>
        {/* <Route>
          <About />
        </Route> */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
