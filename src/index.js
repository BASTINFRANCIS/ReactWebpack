// import React from 'react';
// import { render } from 'react-dom';
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import AppTemplate from './Component/Common/AppTemplate';
// import AsyncComponent from './AsyncComponent';
// import basePath from './Component/Common/utils/basePath';

// //import "./style/app.scss";

// const home = () => import(/* webpackChunkName: "home" */ './Component/Pages/Home');
// const about = () => import(/* webpackChunkName: "about" */ './Component/Pages/About');
// const dashboard = () => import(/* webpackChunkName: "dashboard" */ './Component/Pages/Dashboard');

// render(
//   <Router>
//     <AppTemplate>
//       <Route path={basePath``} exact={true} component={() => <AsyncComponent moduleProvider={home} />} />
//       <Route path={basePath`about`} exact={true} component={() => <AsyncComponent moduleProvider={about} />} />
//       <Route path={basePath`dashboard`} exact={true} component={() => <AsyncComponent moduleProvider={dashboard} />} />
//     </AppTemplate>
//    </Router>,
//   document.getElementById("app")
// );

import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Component/Menu/Menu';
import './style/app.scss'

ReactDOM.render(<Menu />, document.getElementById("app"));