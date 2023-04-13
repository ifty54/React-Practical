import React from 'react'

const Tagline = props => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} includes {props.subName}</h1>
            {props.children}
        </div>
    )
    
}
    

export default Tagline

// props vs state
// props immutable but not state