import React, { Component } from 'react'

export default class State extends Component {
    
constructor(props){
    super(props)
  
    this.state = {
       count: 100000
    }
  }
  
  handleIncrement = () => {
    this.setState({
        count : this.state.count + 1000
    })
  }

  render() {

    const {count} = this.state
    return (
      <div>
        <h1>Total Visitor: {count}</h1>
        <button onClick={this.handleIncrement} disabled={count === 120000 ? true: false}>Real Time Update</button>
      </div>
    )
  }
}
