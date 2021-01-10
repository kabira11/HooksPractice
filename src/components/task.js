import React, { Component } from 'react'
import {connect} from 'react-redux'

class task extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             input1: 0,
             input2: 0,
             input3: 0,
             average: 0
        }
    }



    handleInputchange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        },() => {
            // console.log(this.state.input1)
            // console.log(this.state.input2)
            // console.log(this.state.input3)
            this.setState({
                average : (parseInt(this.state.input1) + parseInt(this.state.input2) + parseInt(this.state.input3))/3
            }, () => {
                this.props.dispatch({ type: 'UPDATE_AVG' , payload: this.state.average});
              })
        })



    }
    
    render() {
        console.clear()
        console.log("object")
        return (
            <div>
                <h4>Average : {this.state.average}</h4>
                    <input type="number" 
                    value={this.state.input1}
                    onChange={this.handleInputchange}
                    name="input1"
                    />
                    <input type="number" 
                    value={this.state.input2}
                    onChange={this.handleInputchange}
                    name="input2"
                    />
                    <input type="number" 
                    value={this.state.input3}
                    onChange={this.handleInputchange}
                    name="input3"
                    />
            </div>
        )
    }
}

// mapStateToProps = () => {

// }

const mapStateToProps = (state) => {
    return {
      average: state.average
    };
  }

export default connect(mapStateToProps,null)(task)
