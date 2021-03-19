import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)
        //first step to create ref
        // second step to attach a ref to input element
        // third step to focus on input
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        // 3rd step
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
