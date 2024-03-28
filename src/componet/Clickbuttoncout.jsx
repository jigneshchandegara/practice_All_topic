import React, { useState } from 'react'

const Clickbuttoncout = () => {
    const [data, setdata] = useState(0);

    const incre = () => {
        setdata(data + 1)
    }
    return (
        <>
            <div>{data}</div>
            <button onClick={incre}>+</button><br />
        </>
    )
}
export default Clickbuttoncout;