import React from 'react'

import PegeHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'



export default props =>
    <div>
        <PegeHeader name="Tarefas" small="Cadastro" />
        <TodoForm />
        <TodoList />
    </div>
