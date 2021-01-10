import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ParentName  : "This is parent"
      }
      this.GreetParent = this.GreetParent.bind(this)
    }

    GreetParent = (ChildName) => {
        alert (`Hello ${this.state.ParentName} ${ChildName}`)
    }
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.GreetParent}/>
      </div>
    )
  }
}

export default ParentComponent
