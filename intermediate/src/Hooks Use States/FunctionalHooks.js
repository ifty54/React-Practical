import React, { useState } from 'react'

export default function FunctionalHooks() {

    const [count, setCount] = useState(2023)
    const handleIncrement = () => {
      //setCount works twice before updating the value
        setCount(count => count - 1);
        setCount(count => count - 1);
    }
  return (
    <div>
        <h1>Down To Memory Lane: {count}</h1>
        <button onClick={handleIncrement}>Road To Legacy</button>
    </div>
  )
}

