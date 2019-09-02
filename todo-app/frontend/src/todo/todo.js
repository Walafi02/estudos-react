import React, { Component } from 'react'
import axios from 'axios'

import PegeHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{

    constructor(){
        super()
        this.state = {
            description: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemover = this.handleRemover.bind(this)
        this.handleMarckAsDone = this.handleMarckAsDone.bind(this)
        this.handleMarckAsPending = this.handleMarckAsPending.bind(this);
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    refresh(description = ''){
    
        const search = description ? `&description__regex=/${description}/` : ''
        // const search = description ? `&description__regex=/&{description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(response => 
                this.setState({
                    ...this.state,
                    description,
                    list: response.data
                })
            )
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleRemover(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(
                response => this.refresh(this.state.description)
            )
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, {
            description
        }).then(response =>
            this.refresh()
            )
    }


    handleMarckAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {
            ...todo, done: true
        }).then(response =>
                this.refresh(this.state.description)
            )
    }

    handleMarckAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {
            ...todo, done: false
        }).then(response =>
                this.refresh(this.state.description)
            )
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PegeHeader name="Tarefas" small="Cadastro" />
                <TodoForm 
                    description={this.state.description}
                    handleClear={this.handleClear} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}/>
                <TodoList list={this.state.list} 
                    handleMarckAsDone={this.handleMarckAsDone}
                    handleMarckAsPending={this.handleMarckAsPending}
                    handleRemover={this.handleRemover} />
            </div>
        )
    }
}