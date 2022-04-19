import React from 'react';
import ReactDOM from 'react-dom';

const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;

ReactDOM.render(element, document.getElementById('root'));
