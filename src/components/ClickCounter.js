import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
/*
why higer order component

To share common functionality between components.
*/
export class ClickCounter extends Component {
    //rconst for creating constructor
    //below code constructor and incrementCount are placed in HOC file i.e withCounter.js
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count: 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState(prevState => {
    //        return {count: prevState.count + 1} 
    //     })
    // }
    
    render() {

        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter,5)
