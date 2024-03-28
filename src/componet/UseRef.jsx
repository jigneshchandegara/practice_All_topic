import React, { useRef } from 'react'

const Ref = () => {
    let fname = useRef()
    let lname = useRef()
    let submit = () => {

        const data = {
            fname: fname.current.value,
            lname: lname.current.value
        }
        console.log(data);
        fname.current.value='';
        lname.current.value='';
    }
    return (
        <div>
            <input type="text" ref={fname} />
            <input type="text" ref={lname} />
            <button onClick={submit}>submit</button>
        </div>
    )
}

export default Ref