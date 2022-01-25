import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import basePath from './utils/basePath';

export default ({children}) => (
  <div className="flex-container">
    <nav>
      <Link to={basePath``} >Home</Link>
      <Link to={basePath`About`}>Projects</Link>
      <Link to={basePath`Dashboard`} >Contact</Link>
    </nav>
    <div className="container">
      <div className="card">
        <h1>Component is loaded</h1>
        {children}
      </div>
    </div>
    <hr/>
    <footer style={{textAlign: "center"}}>
      <b>Lazy Routing Demo</b>
    </footer>
  </div>
);