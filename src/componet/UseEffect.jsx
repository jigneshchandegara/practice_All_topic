import React, { useEffect, useState } from 'react'


const Effect = () => {

  const [data, setdata] = useState(0)
  const [val, setval] = useState("");

  // let submit = ()=>{
  //     setdata(data+1)
  // }

  // useEffect(() => {
  //     console.log("continue count");
  //     setTimeout(() => {
  //         setdata(data + 1);
  //     }, 1000);
  // })

  useEffect(() => {
    console.log("useeffect start");
    setTimeout(() => {
      setdata(data + 1);
    }, 1000);

  }, [val])
  return (
    <>
      <h1>use useEffect Hook Example</h1>
      <h1>{data}</h1>
      <h2>{val}</h2>
      {/* <button onClick={submit}>click me</button> */}
      <button onClick={() => setval("jignesh")}>Click</button>


    </>
  )
}

export default Effect