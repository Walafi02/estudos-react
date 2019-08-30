import React, { Component } from 'react'
import PegeHeader from '../template/pageHeader'

export default class Todo extends Component{

    render() {
        return (
            <div>
                <PegeHeader name="Tarefas" small="Cadastro" />
            </div>
        )
    }
}