import React from "react";

const Cradtitle = ({ title, desc }) =>{
    return (
        <div class="card" style={{ width: '18rem' }}>
            <div class="card-body">
                <h5 class="card-title" className="tital1">{title}</h5>
                <p class="card-text">{desc}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
export  default Cradtitle; 