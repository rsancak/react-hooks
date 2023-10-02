import React, {useState} from 'react';

const UseState = () => {
    const [color, changeColor] = useState("red");
    return (
        <>
            <h1>useState</h1>
            <h2 style={{backgroundColor: color}}>Title Color</h2>
            <br/>
            Change color with input: 
            <input type="text" placeholder="type color" onChange={(e)=> changeColor(e.target.value)} /><br/>
            <button onClick={()=> changeColor("blue")}>Change color with button</button>
        </>
    )
}

export default UseState;