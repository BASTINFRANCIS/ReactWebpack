import React from "react";
import { BrowserRouter as Router,Routes ,Route,Link } from 'react-router-dom';
import '../../scss/app.scss'

import AppTemplate from '../Common/AppTemplate';
import AsyncComponent from '../../AsyncComponent';
import basePath from '../Common/utils/basePath';

const Home = () => import(/* webpackChunkName: "home" */ '../Pages/Home');
const About = () => import(/* webpackChunkName: "About" */ '../Pages/About');
const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ '../Pages/Dashboard');

export default function BasicExample() {
  return (
    <Router>
    <AppTemplate>
      <Route path={basePath``} exact={true} component={() => <AsyncComponent moduleProvider={Home} />} />
      <Route path={basePath`projects`} exact={true} component={() => <AsyncComponent moduleProvider={About} />} />
      <Route path={basePath`contact`} exact={true} component={() => <AsyncComponent moduleProvider={Dashboard} />} />
    </AppTemplate>
   </Router>,
  document.getElementById("app")

    // <Router>
    //   <div>
    //       <div>
    //             <button type="button" className="btn btn-primary">Primary</button>
    //       </div>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/dashboard">Dashboard</Link>
    //       </li>
    //     </ul>

    //     <hr />

    //     {/*
    //       A <Switch> looks through all its children <Route>
    //       elements and renders the first one whose path
    //       matches the current URL. Use a <Switch> any time
    //       you have multiple routes, but you want only one
    //       of them to render at a time
    //     */}
    //     <Routes>
    //       <Route exact path="/" element={<Home/>}>
    //       </Route>
    //       <Route path="/about" element={<About/>}>
    //       </Route>
    //       <Route path="/dashboard" element={<Dashboard />}>
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
  );
}
