import React, {useState} from 'react'

export default function Counter(){
    
     const [count, setCount] = useState(0); {/*stateArray has two elements */}
     
{/*
    stateArray[0] -> value that we store
    stateArray[1] -> function that you use to change the value
*/}

    return(
    <div>
        <h2>Counter</h2>

        <p>You clicked {count} times</p>

        <button onClick={()=>setCount(count + 1)}> PLUS </button> {/* first, the event fires*/}
        <button onClick={()=>setCount(count - 1)}> MINUS </button>
    </div>
    )
}