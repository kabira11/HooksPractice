import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounter extends Component {
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
        //Destructing props coming from HOC i.e withCounter.js
        const { count, incrementCount } = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter,10)
