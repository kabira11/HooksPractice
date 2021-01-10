import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    console.log("LifecycleA constructor");
        this.state = {
             name: "pankaj"
        }
    }

    // static getDerivedStateFromProps (props , state) {
    //     console.log("LifecycleA getDerivedStateFromProps")
    //     return null;
    // }
    
    componentDidMount() {
      console.log("LifecycleA componentDidMount")  
    } 
    componentWillMount() {
      console.log("LifecycleA componentWillMount")  
    } 
    
    componentWillUpdate(){
        console.log("LifecycleA componentWillUpdate") 
    }

    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate")
        return true;
    }

    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate")
    }

    ClickHandler = () => {
        this.setState({
            name : "Good Bye.."
        },()=> {
           console.log("after setstate")
        })
    }

    render() {
        console.log(" LifecycleA render")
        return (
            <div>
                <div>Life cycle A</div>
                <button onClick = {this.ClickHandler}>Click</button>
                {/* <LifecycleB /> */}
            </div>
        )
    }
}

export default LifecycleA
