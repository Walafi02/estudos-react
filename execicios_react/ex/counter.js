import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepCharge} from './countActions'

const Counter = (props) => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.stepCharge} value={props.counter.step} type="number"/>
        <button onClick={props.inc}>Inc</button>
        <button onClick={props.dec}>Dec</button>
    </div>
)

const mapStateProps = (state) => ({ counter: state.counter})
const mapDispatchToProps = dispatch => 
    bindActionCreators({
        inc, 
        dec, 
        stepCharge
    }, dispatch)

export default connect(mapStateProps, mapDispatchToProps)(Counter)