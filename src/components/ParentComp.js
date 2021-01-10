import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PurComponent from './PurComponent'
//this is for comparision for purecomponent
export class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Raviaaaaaaa'
        }
    }

    //every 2 second change the state 
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'pankajwaaa'
            })
        },2000)
    }
    
//this condition is for shallow comparision for react
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          name: 1
    //     }
    // }

    // componentDidMount(c) {
    //     setInterval(() => {
    //         this.setState({
    //             name: this.state.name + 1
    //         })
    //     },2000)
    // }

    render() {
        console.log("==============parent componet==========")
        return (
            <div>
                <h1>Parent Component</h1>
                <RegularComponent name={this.state.name}></RegularComponent>
                <PurComponent name={this.state.name}></PurComponent>
            </div>
        )
    }
}

export default ParentComp
