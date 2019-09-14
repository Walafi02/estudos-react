import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Deshboard from '../dashboard/bashboard'
import Billingcycle from '../billingCycle/billingCycle'

export default props => (
    <Router history = {hashHistory}>
        <Route path='/' component={Deshboard} />
        <Route path='/billingCycles' component={Billingcycle} />
        <Redirect from='+' to='/' />
    </Router>
)