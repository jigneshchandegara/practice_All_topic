import React, { useState } from 'react';

export const UseState = () => {
    const [fname, setfname] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [password, setpassword] = useState("");


    const submit = () => {

        const fromdata = {
            fname,
            email,
            address,
            password
        }

        console.log(fromdata);
    }

    return (
        <>
            <h2 className="text-3xl font-bold">From</h2>
            <label> Name:-</label>
            <input type='text' name='name' id='name' onChange={(e) => setfname(e.target.value)} /><br />
            <label> Email:-</label>
            <input type="text" name="email" id="email" onChange={(e) => setemail(e.target.value)} /><br />
            <label>address:-</label>
            <textarea name="address" id="address" onChange={(e) => setaddress(e.target.value)} ></textarea><br />
            <label> password:-</label>
            <input type="password" name="password" id="password" onChange={(e) => setpassword(e.target.value)} /><br />
            <button onClick={submit}>Submit</button>
        </>
    )
}
