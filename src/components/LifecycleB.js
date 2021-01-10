import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    console.log("LifecycleB constructor");
        this.state = {
             name: "pankaj"
        }
    }

    static getDerivedStateFromProps (props , state) {
        console.log("LifecycleB getDerivedStateFromProps")
        return null;
    }
    
    componentDidMount() {
      console.log("LifecycleB componentDidMount")  
    } 

    render() {
        console.log(" LifecycleB render")
        return (
            <div>
                form .
            </div>
        )
    }
}

export default LifecycleB
