import React, { Component } from 'react'

class Form extends Component {
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

    handleUsernamechange = (e) => {
        console.log(e.target.value)
        this.setState({
            userName: e.target.value
        })

    }
    
    handleCommentchange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleTopicchange = e => {
        this.setState({
            topic: e.target.value
        })
    }

    handleSubmit = e => {
        alert(`USERNAME "${this.state.userName}" COMMENT "${this.state.comment}" TOPIC "${this.state.topic}" Gender "${this.state.gender}"`)
        e.preventDefault();
    }

    handleUserGenderchange = e => {
        this.setState({
            gender: e.target.value
        })
    }

    render() {
        //destructuring
        const { userName , comment , topic} = this.state;
        return (
            <form onSubmit={this.handleSubmit}> 
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" 
                    value={userName}
                    onChange={this.handleUsernamechange}
                    />
                </div>
                <div>
                    <label htmlFor="">Comment</label>
                    <textarea 
                    value={comment}
                    onChange={this.handleCommentchange}
                    />
                </div>
                <div>
                    <label htmlFor="">Topic</label>
                    <select        
                        value={topic}
                        onChange={this.handleTopicchange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <div>
                <p>Please select your gender:</p>
                    <input type="radio" name="gender" value="male" onChange={this.handleUserGenderchange} checked/> Male
                    <input type="radio" name="gender" value="female" onChange={this.handleUserGenderchange}/> Female
                    <input type="radio" name="gender" value="other" onChange={this.handleUserGenderchange}/> Other
                </div>
                <button type="submit">submit</button>
            </form>
        )
    }
}

export default Form
