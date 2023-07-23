import React, { Component } from 'react'
import EachBox from './EachBox'

export default class TempBox extends Component {
  render() {
    const { handleChange, TempC, TempF } = this.props

    return (
      <div className="TempBox">
        <EachBox name="C" placeholder="CE" handleChange={handleChange} value={TempC} />
        <EachBox name="F" placeholder="FE" handleChange={handleChange} value={TempF} />
      </div>
    )
  }
}
