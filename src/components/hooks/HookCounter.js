import React, {useState} from 'react'


// useState is a hook that lets you add react state to functional components
const HookCounter = () => {

  // useState accepts an argument which is the initial value of the state property
  // and returns a pair of value ,current value of the state variable which we are going to call as count and a method that can update the state variable which we are goint to call setCount.
  // const [count, setCount] =  this syntax is called array destructing.
  // 0 initial value of count
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter