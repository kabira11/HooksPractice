import React, {useContext} from 'react'
import { CountContext } from '../../App';

// useReducer -- Local state management
// Share state between components -- Global state management --> useReducer + useContext we can acheive 

function ComponentA_R() {
  const countContext = useContext(CountContext)
  return (
    <div>
      Component A {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
			<button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
			<button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA_R