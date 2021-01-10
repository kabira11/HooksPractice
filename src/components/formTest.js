import React, { Component } from 'react'

class formTest extends Component {
    //rconst to create constructor
    constructor(props) {
        super(props)
    
        this.state = {
            userName: '',
            comment: '' ,
            topic: 'react',
            gender: 'male'
        }
    }

    handleUserchange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
       

    }
    
    // handleCommentchange = (e) => {
    //     this.setState({
    //         comment: e.target.value
    //     })
    // }

    // handleTopicchange = e => {
    //     this.setState({
    //         topic: e.target.value
    //     })
    // }

    handleSubmit = e => {
        alert(`USERNAME "${this.state.userName}" COMMENT "${this.state.comment}" TOPIC "${this.state.topic}" Gender "${this.state.gender}"`)
        e.preventDefault();
    }

    // handleUserGenderchange = e => {
    //     this.setState({
    //         gender: e.target.value
    //     })
    // }

    render() {
        //destructuring
        const { userName , comment , topic} = this.state;
        return (
            <form onSubmit={this.handleSubmit}> 
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" 
                    value={userName} name="userName"
                    onChange={this.handleUserchange}
                    />
                </div>
                <div>
                    <label htmlFor="">Comment</label>
                    <textarea 
                    value={comment} name="comment"
                    onChange={this.handleUserchange}
                    />
                </div>
                <div>
                    <label htmlFor="">Topic</label>
                    <select        
                        value={topic} 
                        onChange={this.handleUserchange}>
                        <option value="react" name="topic">React</option>
                        <option value="angular" name="topic">Angular</option>
                        <option value="vue" name="topic">Vue</option>
                    </select>
                </div>
                <div>
                <p>Please select your gender:</p>
                    <input type="radio" name="gender" value="male" onChange={this.handleUserchange}/> Male
                    <input type="radio" name="gender" value="female" onChange={this.handleUserchange}/> Female
                    <input type="radio" name="gender" value="other" onChange={this.handleUserchange}/> Other
                </div>
                <button type="submit">submit</button>
            </form>
        )
    }
}

export default formTest
