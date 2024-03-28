import React, { useState } from 'react';
import Clickbuttoncout from './Clickbuttoncout';

const Dataincerment = () => {
    const [detail, setdetail] = useState([
        {
            tital: "photo1",
            description: "this  is description ",
        },
        {
            tital: "photo2",
            description: "this  is description ",
        },
        {
            tital: "photo3",
            description: "this  is description ",
        },
        {
            tital: "photo4",
            description: "this  is description ",
        },
        {
            tital: "photo5",
            description: "this  is description ",
        }
    ]);

    const incerment = () => {
        let arr = [...detail];
        arr.push(arr[0]);
        setdetail(arr)
    }

    return (
        <>  
            <h1>click button add new card</h1>
            <button onClick={incerment}>add</button>
            {
                detail.map((value, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">{value.tital}</h5>
                                    <p class="card-text">{value.description}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }

            <div>
                <h1>click button cout number</h1>
                <Clickbuttoncout/>
            </div>
        </>


    )

}

export default Dataincerment ;