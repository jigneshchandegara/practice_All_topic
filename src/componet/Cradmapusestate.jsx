import React, { useState } from "react";
const Cardstate = () => {
    const [detail, setdetail] = useState([
        {
            tital: "photo11",
            description: "this  is description ",
        },
        {
            tital: "photo22",
            description: "this  is description ",
        },
        {
            tital: "photo33",
            description: "this  is description ",
        },
        {
            tital: "photo44",
            description: "this  is description ",
        },
        {
            tital: "photo55",
            description: "this  is description ",
        }
    ]);


    return (
        <div className="d-flex flex-wrap">
            {
                detail.map((value, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div class="card col-3">
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
        </div>
    )

}

export default Cardstate