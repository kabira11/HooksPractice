import React, {useState} from 'react'


// useState is a hook that lets you add react state to functional components
const HookCounterThree = () => {

  // useState accepts an argument which is the initial value of the state property
  // and returns a pair of value ,current value of the state variable which we are going to call as count and a method that can update the state variable which we are goint to call setCount.
  // const [count, setCount] =  this syntax is called array destructing.

  //default value is object
  // A state variable can be a string, number, boolean, an object, array you can use any of those types based
  const [name, setName] = useState({ 
        firstName: '',
        lastName: ''
  })



  return (
    <form >
        <input 
        type="text"
        value={name.firstName} 
        onChange={e => setName({...name , firstName: e.target.value})}/><br/>
        <input 
        type="text" 
        value={name.lastName} 
        onChange={e => setName({...name , lastName: e.target.value})}/>
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

export default HookCounterThree