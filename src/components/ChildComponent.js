import React from 'react'
//rfce to create react functional component snippet
//if you want send parameter in props method then use () => props.methodName("parameter")
function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      <button onClick={ () => props.greetHandler("from child")}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
