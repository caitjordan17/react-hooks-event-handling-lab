// Code Keypad Component Here
import React from 'react';

function Keypad (){
    function keypadChange(){
        console.log("Entering password...")
    };
    
    return (
        <div>
            <input type='password' onChange={keypadChange}/>
        </div>
    )
}

export default Keypad;