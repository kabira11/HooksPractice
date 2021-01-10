import React, { Component } from 'react'
import {connect} from 'react-redux'

class category extends Component {
    render() {
        console.log()
        return (
            <div>
                <h4>Category {(this.props.average <= 10) ? "low" : "high"}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      average: state.average
    };
  }

export default connect(mapStateToProps,null)(category)
