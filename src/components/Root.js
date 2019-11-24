import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import Categories from './Categories'
import About from './About'
import PostsContainer from './PostsContainer'
import PostsPanelContainer from './PostsPanelContainer'
import Tile from './Tile'
import App from '../App'

const Root = ({ store }) => (
  <Provider store={store}>
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/new" component={PostsPanelContainer} />
      <Route path="/posts" component={PostsContainer} />
      <Route path="/tile" component={Tile} />
      <Route path="/categories" component={Categories} />
      <Route path="/about" component={About} />
      <Redirect exact from="/" to="/new" />
    </div>
  </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
