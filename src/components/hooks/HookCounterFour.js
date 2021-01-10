import React, {useState} from 'react'


// useState is a hook that lets you add react state to functional components
const HookCounterFour = () => {

  // useState accepts an argument which is the initial value of the state property
  // and returns a pair of value ,current value of the state variable which we are going to call as count and a method that can update the state variable which we are goint to call setCount.
  // const [count, setCount] =  this syntax is called array destructing.

  //default value is object
  // A state variable can be a string, number, boolean, an object, array you can use any of those types based
  const [items, setItems] = useState([])

  const addItem = () => {
      setItems([...items, {
          id: items.length,
          value: Math.floor(Math.random()*10) + 1
      }])
  }

  return (
    <div>
        <button onClick={addItem}>Add a number</button>
        <ul>
            {
                items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default HookCounterFour