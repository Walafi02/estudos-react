import React, { Component } from 'react';


export default class ComponeteClass extends Component {

    render(){
        return <h1>{this.props.valor || "padrao"}</h1>
    }

}
