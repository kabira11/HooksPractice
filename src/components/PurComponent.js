import React, { PureComponent } from 'react'

export class PurComponent extends PureComponent {
    
    render() {
        console.log("==============Pure componet==========")
        return (
            <div>
                <h1>PureComponent  {this.props.name}</h1>
            </div>
        )
    }
}

export default PurComponent
