import React from "react";

const Cradmap = ({data}) =>{
    console.log(data);
    return (
        <>
            {
                data.map((value, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">{value.tital}</h5>
                                    <p class="card-text">{value.name}</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default Cradmap;