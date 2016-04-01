import React from 'react'
import ReactDOM from 'react-dom'
import BrowsePage from '../components/BrowsePage'
//import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render((
    <BrowsePage />
), document.getElementById('root'));

// not sure how SPA routing should work with separate views / entry files 

// ReactDOM.render((
//  <Router history={browserHistory}>
//    <Route
//      path="/"
//      getComponent={(location, callback) => {
//        require.ensure([], function (require) {
//          callback(null, require('../components/BrowsePage'));
//        });
//      }}
//    />
//    <Route
//      path="/pdp/:id"
//      getComponent={(location, callback) => {
//        require.ensure([], function (require) {
//          callback(null, require('../components/ProductDetailPage'));
//        });
//      }}
//    />
//  </Router>
// ), document.getElementById('root'));