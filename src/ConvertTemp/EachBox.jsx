import React, { Component } from 'react'

export default class EachBox extends Component {
  render() {
    const { value, name, placeholder, handleChange } = this.props

    return (
      <fieldset>
        <legend>{name}</legend>
        <input
          value={value}
          name={name}
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </fieldset>
    )
  }
}
