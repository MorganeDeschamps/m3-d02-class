import React, {useState} from 'react'

export default function Counter(props){
    const count = props.parentCount
    const setCount = props.parentSetCount
{/*
    stateArray[0] -> value that we store
    stateArray[1] -> function that you use to change the value
*/}

    return(
    <div>
        <h2>Counter {props.counterName}</h2>

        <button onClick={()=>setCount(count + 1)}> GO </button> {/* first, the event fires*/}
        <button onClick={()=>setCount(count - 1)}> SAVE MONEY </button>
    </div>
    )
}