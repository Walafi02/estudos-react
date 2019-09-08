import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { add, chargeDescription, search } from './todoActions'

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandle = this.keyHandle.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandle(e){

        const { add, search, description } = this.props

        if(e.key === 'Enter'){
            e.shiftKey ? search() : add(description)
        }else if(e.hey === 'Escape') {
            props.handleClear()
        }
    }

    render() {
        const { add, search, description } = this.props
        return (
            <div>
                <div role='form' className='todoForm'>
                    <Grid cols='12 9 10'>
                        <input id='description' className='form-control' 
                            placeholder='Adicione uma Tarefa'
                            onChange={this.props.chargeDescription} 
                            value={this.props.description}
                            onKeyUp={this.keyHandle}/>
                    </Grid>
                    <Grid cols='12 3 2'>
                        <IconButton style='primary' icon='plus' onClick={() => add(description)} /> 
                        <IconButton style='info' icon='search' onClick={() => search()} /> 
                        <IconButton style='default' icon='close' onClick={this.props.handleClear} />
                    </Grid>
                </div>
            </div>
        )
    }
}

const matStateToProps = state => ({description: state.todo.description})
const matDispatchToProps = dispatch => bindActionCreators({ add, chargeDescription, search }, dispatch)

export default connect( matStateToProps, matDispatchToProps)(TodoForm)