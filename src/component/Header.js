import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1>Bullettin Board</h1>
        <div className="nav-container">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">            
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link className="nav-link" to="/post">Post</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/tile">Tiles</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/categories">Categories</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}
export default Header;
