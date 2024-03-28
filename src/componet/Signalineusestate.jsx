import React, { useState } from 'react';

const SignalineUsestate = () => {

    const [signal, setSignal] =useState()

    let handle = (e) =>{
        setSignal({...signal,[e.target.name]:e.target.value})
    }
    const submit =()=>{
        console.log(signal);
    }
    return (
        <div>
            <input type="text" name="fname" placeholder="enter your firstname" onChange={handle}/><br/>
            <input type="text" name="lname" placeholder="enter your lastname" onChange={handle}/><br/>
            <input type="email" name="email" placeholder="enter your emailname" onChange={handle}/><br/>
            <input type="number" name="mobile" placeholder="enter your mobile" onChange={handle}/><br/>
            <button onClick={submit}>Submit</button>
        </div>

    )
}
export default SignalineUsestate