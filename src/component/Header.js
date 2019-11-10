import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
class Header extends React.Component {
  render() {
    return (
      <header className="App-header row">
        <div className="col-xs-12">
          <h1>Bullettin Board</h1>
          <div className="nav-container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/post">Post</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tile">Tiles</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categories">Categories</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}
export default Header;
