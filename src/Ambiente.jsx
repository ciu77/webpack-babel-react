import React, { Component } from 'react';

export default class Ambiente extends Component {

  state = {
    open: false,
  }

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.stopPropagation();
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { ambiente } = this.props;
    const { open } = this.state;
    const { NomeAmbiente, Device: device } = ambiente;
    return (<div>
      <div
        onClick={this.onClick}
      >
        {ambiente.NomeAmbiente}
      </div>
      {open && device.map(dev => <Device device={dev} />)}
    </div>);
  }
}

class Device extends Component {
  render() {
    const { device } = this.props;
    return (<div>{device.DeviceName}
      <ul>
        {device.Sensori.map(sensore => {
          return (<li key={sensore.SensorName}>{sensore.SensorName}</li>)
        })}
      </ul>
    </div>);
  }
}
