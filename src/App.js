import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from './services/api';

function App() {
  const [input, setInput] = useState('');
  const [cepData, setCepData] = useState(null);
  const [error, setError] = useState(null);

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

      <div className='containerInput'>
        <input
          type="text"
          placeholder='Digite seu CEP...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className='buttonSearch' onClick={handleSearch}>
          <FiSearch size={25} color='#fff' />
        </button>
      </div>

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
    </div>
  );
}

export default App;
