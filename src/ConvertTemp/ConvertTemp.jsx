import React, { Component } from 'react'
import TempBox from './TempBox'
import TempInfo from './TempInfo'

const HandleConvertTemp = (type, value) => {
  let TempArray = []

  if (type === 'C') {
    TempArray['C'] = value
    TempArray['F'] = value * 1.8 + 32
  } else if (type === 'F') {
    TempArray['F'] = value
    TempArray['C'] = (value - 32) / 1.8
  }

  return TempArray
}

export default class ConvertTemp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      CE: '',
      FE: '',
    }
  }

  handleChange = (e) => {
    let value = e.target.value
    if (value === '') {
      this.setState({
        CE: '',
        FE: '',
      })
    }
    // const value = parseFloat(e.target.value)
    // let isString = typeof value === 'string'
    const name = e.target.name
    value = parseFloat(value)
    if (isNaN(value)) return
    const TempArray = HandleConvertTemp(name, value)

    this.setState({
      CE: TempArray['C'],
      FE: TempArray['F'],
    })
  }

  render() {
    const { CE, FE } = this.state

    return (
      <div className="ConvertTemp">
        <TempBox TempC={CE} TempF={FE} handleChange={this.handleChange} />

        <TempInfo temp={CE} />
      </div>
    )
  }
}
