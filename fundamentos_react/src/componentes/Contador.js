import React, { Component } from 'react';

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.diferencia(1);
        // this.setState({ numero: this.state.numero +1 })
    }

    menosUm = () => {
        this.diferencia(-1);
        // this.setState({ numero: this.state.numero -1 })
    }

    diferencia = (valor) => {
        this.setState({ numero: this.state.numero + valor});
    }

    render(){
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
            
                <button onClick={() => this.diferencia(10)}>Add +10</button>
                <button onClick={() => this.diferencia(-10)}>Del -10</button>
            </div>
        )
    }

}




//solucao 01
// constructor(){
//     super();
//     this.maisUm = this.maisUm.bind(this);
// }