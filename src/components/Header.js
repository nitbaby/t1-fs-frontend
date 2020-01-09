import React from 'react'
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'
class Header extends React.Component {
  render() {
    return (
      <header className="App-header row">
        <div className="col-xs-12">
          <h1 className="mt-3">Bullettin Board</h1>
          <div className="nav-container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/posts/all">All posts</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/new">Add new</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/categories">Categories</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
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
