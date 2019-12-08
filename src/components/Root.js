import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import Categories from './Categories'
import About from './About'
import PostDetail from './PostDetail'
import PostsContainer from './PostsContainer'
import PostsPanelContainer from './PostsPanelContainer'
import App from '../App'

const Root = ({ store }) => (
  <Provider store={store}>
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/new" component={PostsPanelContainer} />
      <Route path="/posts" component={PostsContainer} />
      <Route path="/post/:id" component={PostDetail} />
      <Route path="/categories" component={Categories} />
      <Route path="/about" component={About} />
    </div>
  </Router>
  </Provider>
)
// <Redirect exact from="/" to="/new" />
Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
