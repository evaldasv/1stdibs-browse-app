import React from 'react'
import ReactDOM from 'react-dom'
import ProductDetailPage from '../components/ProductDetailPage'

import { browserHistory, Router, Route } from 'react-router'


ReactDOM.render((
	<Router history={browserHistory}>
    	<Route path="pdp/:pdpID" component={ProductDetailPage} />
  	</Router>
), document.getElementById('root'));