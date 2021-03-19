import React, { PureComponent } from 'react'

export class PurComponent extends PureComponent {
    
    render() {
        // A pure component implements shouldComponentUpdate with a shallow props and state comparision.
        console.log("==============Pure componet==========")
        return (
            <div>
                <h1>PureComponent  {this.props.name}</h1>
            </div>
        )
    }
}

export default PurComponent
