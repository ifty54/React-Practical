import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "hello people"
      }
      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
                message: "Bye People"
            })

    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        
        {/* Most common approach */}

        <button onClick={this.clickHandler}>Bro! Click it here!</button>

        {/* 2nd approach */}
        {/* <button onClick={this.clickHandler.bind(this)}>Bro! Click here!</button> */}
        {/* 3rd approach */}
        {/* <button onClick={()=>this.clickHandler()}>Bro! Click here!</button> */}
      </div>
    )
  }
}

export default EventBind



