import React from 'react';
//this is HOC
//second parameter incrementNumber is optional based on your requirement
const UpdatedComponent = (OriginalComponent , incrementNumber) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
               return {count: prevState.count + incrementNumber} 
            })
        }
        render() {
            return <OriginalComponent 
            count={this.state.count} 
            incrementCount={this.incrementCount}
            //this is for adding props whatever sends from APP.js
            {...this.props}
            />
        }
    }

    return NewComponent
}

export default UpdatedComponent