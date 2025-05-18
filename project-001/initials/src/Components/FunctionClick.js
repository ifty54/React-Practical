import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("button is clicked")
    }
  return (
    <div>
        <button onClick={clickHandler}>Click it</button>
    </div>
  )
}

export default FunctionClick