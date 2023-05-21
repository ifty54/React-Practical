import React, { Component } from 'react'

export default class Hooks extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 2022
      }
    }
    seeIncrement = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
  render() {
    const count = this.state.count
    return (
      <div>
        <h1>Count the Deadline: {count}</h1>
        <button onClick={this.seeIncrement}>See</button>
      </div>
    )
  }
}
