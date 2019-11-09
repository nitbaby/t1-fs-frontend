import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Categories from './component/Categories';
import About from './component/About';
import Post from './component/Post';
import Tile from './component/Tile';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/categories" component={Categories} />
      <Route path="/about" component={About} />
      <Route path="/post" component={Post} />
      <Route path="/tile" component={Tile} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
