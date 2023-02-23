import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

// Pages by React BrowserRouter //
import About from '../pages/About'
import Home from '../pages/Home'
import Singleproduct from '../pages/Singleproduct'

// Components Header & Footer & Error & Products //
import Header from '../components/Header'
import Footer from '../components/Footer'
import Error from '../components/Error'

function RoutesPath() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:productId">
          <Singleproduct />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <Error />
        </Route>
        <Redirect to="../components/Error" />
      </Switch>
      <Footer />
    </Router>
  )
}

export default RoutesPath
