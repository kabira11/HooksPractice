import React, { Component } from 'react'
import Task from './components/task'
import Category from './components/category'

export class container extends Component {
    render() {
        return (
            <div>
            <Task/>
            <Category/>
            </div>
        )
    }
}

export default container
