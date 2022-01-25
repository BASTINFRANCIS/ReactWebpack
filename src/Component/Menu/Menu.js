import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Dashboard from '../Pages/Dashboard';

export default function BasicExample() {
  return (

    <Router>
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">WebSiteName</a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </nav>
 
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
