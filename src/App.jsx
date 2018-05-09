import React, { Component } from 'react';
import Ambiente from './Ambiente';

export default class App extends Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  state = {
    filtro: '',
  }

  onChange(e) {
    const txt = e.target.value;
    this.setState({
      filtro: txt,
    });
  }

  render() {
    const { dati } = this.props;
    const { filtro } = this.state;
    const ambienti = dati.Ambienti;
    const ambientiFiltrati = ambienti.filter(amb => {
      return amb.NomeAmbiente.indexOf(filtro) > -1
    });
    return (<div>
      <input type="text" onChange={this.onChange} />
      {ambientiFiltrati.map(ambiente => {
        return (<Ambiente ambiente={ambiente} />);
      })}
    </div>
    );
  }
}
