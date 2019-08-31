import React, { Component } from 'react'
import PegeHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component{

    render() {
        return (
            <div>
                <PegeHeader name="Tarefas" small="Cadastro" />
                <TodoForm />
                <TodoList />
            </div>
        )
    }
}