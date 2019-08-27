import React, { Component } from 'react';
import Button from './../components/Button';

import './Calculator.css';

export default class Calculator extends Component{
    render(){
        return (
            <div className="calculator">
                <Button labal="AC"/>
                <Button labal="/"/>
                <Button labal="7"/>
                <Button labal="8"/>
                <Button labal="9"/>
                <Button labal="*"/>
                <Button labal="4"/>
                <Button labal="5"/>
                <Button labal="6"/>
                <Button labal="-"/>
                <Button labal="1"/>
                <Button labal="2"/>
                <Button labal="3"/>
                <Button labal="+"/>
                <Button labal="0"/>                
                <Button labal=","/>                
                <Button labal="="/>                
            </div>
        )
    }
}

