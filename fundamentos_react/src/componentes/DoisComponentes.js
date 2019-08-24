import React from 'react';

const CompA = (props) => 
    <h1>Primeiro elemento: {props.valor}</h1>

const CompB = (props) =>
    <h1>Segundo elemento: {props.valor}</h1>

export { CompA, CompB }