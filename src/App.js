import React, { useState } from 'react';
import { FiSearch, FiGithub, FiLinkedin } from 'react-icons/fi';
import './styles.css';
import api from './services/api';

function App() {
  const [input, setInput] = useState('');
  const [cepData, setCepData] = useState(null);
  const [error, setError] = useState(null);

  // Função para lidar com a busca do CEP
  async function handleSearch() {
    if (input === '') {
      alert("Preencha algum CEP!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCepData(response.data);
      setError(null);
      setInput('');
    } catch (err) {
      console.error(err);
      setError("Ops, erro ao buscar o CEP.");
      setCepData(null);
      setInput('');
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      {/* Input para inserir o CEP */}
      <div className='containerInput'>
        <input
          type="text"
          placeholder='Digite seu CEP...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />

        {/* Botão para acionar a busca */}
        <button className='buttonSearch' onClick={handleSearch}>
          <FiSearch size={25} color='#000' />
        </button>
      </div>

      {/* Exibição dos resultados do CEP */}
      {cepData && (
        <main className='main'>
          <>
            <h2>CEP: {cepData.cep}</h2>
            <span>{cepData.logradouro}</span>
            <span>Complemento: {cepData.complemento}</span>
            <span>Bairro: {cepData.bairro}</span>
            <span>Cidade: {cepData.localidade} - {cepData.uf}</span>
          </>
          {error && <span>{error}</span>}
        </main>
      )}

      {/* Ícones das redes sociais */}
      <div className="socialIcons">
        <a href="https://github.com/cassiorizo" target="_blank" rel="noopener noreferrer">
          <FiGithub size={30} color={cepData ? '#fff' : '#000'} />
        </a>
        <a href="https://www.linkedin.com/in/cassiorizo89" target="_blank" rel="noopener noreferrer">
          <FiLinkedin size={30} color={cepData ? '#fff' : '#000'} />
        </a>
      </div>
    </div>
  );
}

export default App;
