import React, { useRef, useState } from 'react'

const AddDelete = () => {

    let name = useRef()
    let age = useRef()

    let [data, setdata] = useState([
        { id: 1, name: "John", age: 25 },
        { id: 2, name: "Jane", age: 30 },
    ])

    let submit = () => {

        let newData = {
            // id: (Math.max(...data.map(i => i.id))) + 1,
            id: data.length + 1,
            name: name.current.value,
            age: age.current.value
        };
        name.current.value = "";
        age.current.value = "";
        setdata([...data, newData])

    }

    // let deleteData = (id) => {
    //     console.log(id);
    //     setdata(data.filter((e) => e.id !== id))
    // }
    let deleteData = (index) => {

        // setdata(data.slice(0,index))
        data.splice(index, 1)
        setdata([...data])

    }
    return (
        <>
            <h1>Add Data and deleteData</h1> 
            <input type="text" name="name" ref={name} />
            <input type="number" name="number" ref={age} />
            <button onClick={submit}>add</button>

            {
                data?.map((val, ind) => {

                    return (
                        <>
                            <p>{val.id}</p>
                            <h1>{val.name}</h1>
                            <h2>{val.age}</h2>
                            {/* <button onClick={() => deleteData(val.id)}>delete</button> */}
                            <button onClick={() => deleteData(ind)}>delete</button>
                        </>
                    )

                })
            }
        </>
    )
}

export default AddDelete