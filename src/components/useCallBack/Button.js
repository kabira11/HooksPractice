import React from 'react'
//children is for text inside button tag i.e Increment Age or Increment Salary
function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

export default React.memo(Button)