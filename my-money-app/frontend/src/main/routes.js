import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/bashboard'
// import Dashboard2 from '../bashboard2/bashboard2'
import Billingcycle from '../billingCycle/billingCycle'

export default props => (
    <Router history = {hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={Billingcycle} />
        <Redirect from='+' to='/' />
    </Router>
)