import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

const Api = () => {

    let [data, setdata] = useState([]);
    let name = useRef()
    let age = useRef()

    // get data
    const getdata = () => {
        axios.get("http://localhost:5000/post").then((res) => {
            setdata(res.data)
        })
    }

    //add data
    const adddata = () => {
        let person = {
            name: name.current.value,
            age: age.current.value
        }
        axios.post('http://localhost:5000/post', person).then((result) => {
            console.log(result.data);
            setdata([...data, result.data])
            name.current.value = "";
            age.current.value ="";
        })
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <>
            <input type="text" name='name' placeholder='Enter  your Name' ref={name}/>
            <input type="number" name='age' placeholder='Enter your age' ref={age}/>
            <button onClick={adddata}>Add</button>

            <div className='row'>
                {
                    data.map((value, index) => {
                        return (
                            <div class="card" style={{ width: "18rem" }}>
                                <div class="card-body">
                                    <h5 class="card-title">{value.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{value.age}</h6>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <button class="card-link">view</button>
                                </div>
                            </div>
                        )

                    })
                }

            </div>
        </>
    )
}

export default Api