import React, { Component } from 'react'

export default class TempInfo extends Component {
  checkTemp = () => {
    if (this.props.temp === '') return

    return <>{this.props.temp >= 100 ? <div>nuoc soi</div> : <div>nuoc chua soi</div>}</>
  }

  render() {
    return <>{this.checkTemp()}</>
  }
}
