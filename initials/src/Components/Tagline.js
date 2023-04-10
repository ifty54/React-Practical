import React from 'react'

const Tagline = props => {
    console.log(props)
    return <h1>Hello {props.name} includes {props.subName}</h1>
}
    

export default Tagline