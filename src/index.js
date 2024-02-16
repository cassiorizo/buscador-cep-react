// Importa o React para criar componentes
import React from 'react';

// Importa o ReactDOM para renderizar os componentes no navegador
import ReactDOM from 'react-dom';

// Importa o arquivo de estilos CSS para o componente principal
import './index.css';

// Importa o componente principal da aplicação
import App from './App';

// Loga uma mensagem indicando que a renderização está prestes a acontecer
console.log('Antes de chamar ReactDOM.render()');

// Cria um novo contexto de renderização usando ReactDOM.createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));

// Loga uma mensagem indicando que o contexto de renderização foi criado
console.log('Após chamar ReactDOM.createRoot()');

// Renderiza o componente principal dentro do elemento com o ID 'root' no HTML
root.render(
  // Usa o modo estrito do React para detectar problemas potenciais no código
  <React.StrictMode>
    {/* Renderiza o componente principal da aplicação */}
    <App />
  </React.StrictMode>
);
