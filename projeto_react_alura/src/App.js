import React from 'react';
import './App.css';
import Tabela from './Tabela'

function App() {
  const autores = [
    {
      nome: 'Ricardo',
      titulo: 'Sei la',
      preco: '1'
    },

    {
      nome: 'Gabi',
      titulo: 'Sei la2',
      preco: '2'
    },

    {
      nome: 'Amy',
      titulo: 'Roubando',
      preco: '3'
    }
  ]
  return (
    <div className="App">
      <Tabela autores = {autores} />
    </div>
  );
}

export default App;
