import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

console.log('Antes de chamar createRoot()');
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('Após chamar createRoot()');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
