// React Framework //
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'

// Pages by React BrowserRouter //
import About from './pages/About'
import Home from './pages/Home'
import Singleproduct from './pages/Singleproduct'

// Components Header & Footer & Error & Products //
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'

// CSS //
import './utils/style/main.css'

ReactDOM.render(
  <React.StrictMode>
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
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
