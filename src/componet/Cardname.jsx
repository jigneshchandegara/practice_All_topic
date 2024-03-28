import React from 'react'
import { name, surname } from '../jsdata/name'

const Cardname = () => {
    return (
        <div class="card" style={{width:"18rem"}}>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{surname}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Cardname;