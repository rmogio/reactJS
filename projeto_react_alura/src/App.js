import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela'
import Form from './Formulario'

class App extends Component {
  state = {
    autores : [
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
      },
  
      {
        nome: 'Luna',
        titulo: 'Petisco',
        preco: '4'
      }
    ],
  }

  removeAutor = index =>{
    const {autores} = this.state

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index
      })
    })
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores : [...this.state.autores, autor] })
  }

  render(){
    return (
      <Fragment>
        <Tabela autores = {this.state.autores} removeAutor = {this.removeAutor} />
        <Form escutadorDeSubmit = {this.escutadorDeSubmit} />
      </Fragment>
    );
  }
}

export default App;
