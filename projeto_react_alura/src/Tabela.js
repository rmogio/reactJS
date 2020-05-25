import React, {Component} from 'react'


const TableHead = () => {
  return(
    <thead>
      <tr>
        <th>Autor</th>
        <th>Titulo</th>
        <th>Preço</th>
        <th>Remover</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const linhas = props.autores.map((linha, index)=> {
    return(
      <tr>
        <td>{linha.nome}</td>
        <td>{linha.titulo}</td>
        <td>{linha.preco}</td>
        <td><button>x</button></td>
      </tr>
    )
  })

  return(
    <tbody>
      {linhas}
    </tbody>
  )
}

class Tabela extends Component{
  render(){
      const { autores } = this.props

    return(
      <table>
        <TableHead/>
        <TableBody autores = {autores} />
      </table>
    )
  }
}

export default Tabela