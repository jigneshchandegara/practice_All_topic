import React from 'react'
import Button from '../Atoms/Button';
import Pagebutton1 from './PageButton1'


const Pagebutton = () => {
    const test = () => {
        console.log("test called");
    }
    return (
        <>
            <h1>use Atoms</h1>
            <div class="card" style={{ width: "18rem" }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Button content="go somewhere" onclick={test} color="red" />
                </div>
            </div>

            <Pagebutton1 />
        </>

    )
}

export default Pagebutton