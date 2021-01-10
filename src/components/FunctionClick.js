import React from 'react'
//Type rfce for import react functional  component

function FunctionClick() {

    //In js it is possible a function inside function
   function ClickHandler(){
        console.log("button clicked")
    }
    
  return (
    <div>
      <button onClick = {ClickHandler}>Click funtion component</button>
    </div>
  )
}

export default FunctionClick
