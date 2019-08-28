import React, { Component } from 'react';
import Button from './../components/Button';
import Display from './../components/Display';

import './Calculator.css';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}


export default class Calculator extends Component{

    state = {...initialState};

    constructor(props){
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigito = this.addDigito.bind(this);
    }

    clearMemory(){
        console.log("limpor")
        this.setState({ ...initialState})
    }

    setOperation(operation){
        if(this.state.current === 0){
            this.setState({ operation, current: 1, clearDisplay: true})
        }else{
            const equals = operation === '='
            const currentOperations = this.state.operation
            
            const values = [...this.state.values]
            
            try{
                values[0] = eval( `${values[0]} ${currentOperations} ${values[1]}`)
            }catch(e){
                values[0] = this.state.values[0]
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }
    addDigito(n){
        if(n == '.' && this.state.displayValue.includes('.')){
            return
        }

        const clearDisp = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisp ? '' : this.state.displayValue;
        const displayValue = currentValue + n;

        this.setState({ displayValue, clearDisplay: false});

        if(n !== '.'){
            const i = this.state.current;
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
            console.log(values)
        }
    }
    
    render(){

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button labal="AC" click={this.clearMemory} triple/>
                <Button labal="/" click={this.setOperation} operation/>
                <Button labal="7" click={this.addDigito}/>
                <Button labal="8" click={this.addDigito}/>
                <Button labal="9" click={this.addDigito}/>
                <Button labal="*" click={this.setOperation} operation/>
                <Button labal="4" click={this.addDigito}/>
                <Button labal="5" click={this.addDigito}/>
                <Button labal="6" click={this.addDigito}/>
                <Button labal="-" click={this.setOperation} operation/>
                <Button labal="1" click={this.addDigito}/>
                <Button labal="2" click={this.addDigito}/>
                <Button labal="3" click={this.addDigito}/>
                <Button labal="+" click={this.setOperation} operation/>
                <Button labal="0" click={this.addDigito} double/>
                <Button labal="." click={this.addDigito}/>
                <Button labal="=" click={this.setOperation} operation/>
            </div>
        )
    }
}

