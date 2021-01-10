import React, {useState} from 'react'


// useState is a hook that lets you add react state to functional components
const HookCounterTwo = () => {

  // useState accepts an argument which is the initial value of the state property
  // and returns a pair of value ,current value of the state variable which we are going to call as count and a method that can update the state variable which we are goint to call setCount.
  // const [count, setCount] =  this syntax is called array destructing.

  const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const incrementFive = () => {
      for (let i =0; i < 5; i++ ){
          setCount(prevCount => prevCount + 1)
      }
  }

  return (
    <div>
        Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo