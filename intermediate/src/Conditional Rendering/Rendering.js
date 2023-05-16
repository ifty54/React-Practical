import React, { Component } from 'react'
import HomePage from './HomePage'
import Login from './Login'

export default class Rendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
  render() {
      if(this.state.isLoggedIn){
        return <HomePage />
      }
      else{
        return <Login />
      }
  }
}
