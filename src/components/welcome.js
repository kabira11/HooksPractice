import React,{ Component } from 'react';

class Welcome extends Component{
    render(){
        return <h3>This is class Component {this.props.name} {this.props.sirName}</h3>
    }
}

export default Welcome;