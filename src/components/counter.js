import React, { Component } from 'react'
//Type rce for import react class component
class counter extends Component {
//Type rconst for constructor
    constructor(props) {
    super(props)

    this.state = {
        count : 0
        }
    }

    increament(){
      //setState is async
        this.setState({
            count : this.state.count + 1
            
        },
        () => {
            console.log("call back value ", this.state.count)
        })
        console.log(this.state.count)
    }

  render() {
    return (
      <div>
          <div>count - {this.state.count}</div>
        < button onClick = {() =>this.increament()}>Increment</button>
      </div>
    )
  }
}

export default counter
