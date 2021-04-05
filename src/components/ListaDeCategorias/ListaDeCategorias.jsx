import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = {categorias:[]}
    this._novasCategorias = this._novasCategorias.bind(this)
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  componentWillUnmount() {
    this.props.categorias.desincrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({...this.state, categorias});
  }
  _handleEventoInput(e) {
    if (e.key === "Enter") {
      let valorCategoria= e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section>
        <ul className="lista-categorias">
          {this.state.categorias.map((categoria, index) => {
            return <li key={index} className="lista"> {categoria}</li>;
          })}
        </ul>
        <input
          type="text"
          className="input-categorias"
          placeholder="Adicionar Categorias"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
