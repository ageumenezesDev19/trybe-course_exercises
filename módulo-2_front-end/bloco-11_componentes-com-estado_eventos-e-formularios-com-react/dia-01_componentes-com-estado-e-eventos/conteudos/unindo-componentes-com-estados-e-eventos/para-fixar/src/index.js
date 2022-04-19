import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>Contador de Clicks:</h1>
      <App text="." />
      <App text="." />
      <App text="." />
      <App text="." />
      <h4>Cor <strong Style={"color: rgb(10, 233, 10)"}>Verde</strong>: Número Par</h4>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
