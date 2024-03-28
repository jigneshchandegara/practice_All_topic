import React from 'react'
import Cardname from './Cardname'
import Cradtitle from './Crad&title,desc'
import Cradmap from './Cradmap';
import {userdata} from '../jsdata/datamap'
import Cardstate from './Cradmapusestate';

const Card = () => {
    return (
        <>
            <div>
                <h1>name passing card</h1>
                <Cardname />
            </div>
            <div className="row col-md-12">
            <h1> title and desc  passing card method props</h1>
                <div className="col-md-3">
                    <Cradtitle title="mobile" desc="this is mobile" />
                </div>
                <div className="col-md-3">
                    <Cradtitle title="watch" desc="this is watch" />
                </div>
                <div className="col-md-3">
                    <Cradtitle title="ring" desc="this is mobile" />
                </div>
                <div className="col-md-3">
                    <Cradtitle title="hello" desc="this is mobile" />
                </div>
            </div>
            <div className="col-4">
                <h1>card map passing data method props:</h1>
                <Cradmap data={userdata} />
            </div>
            <div>
                <h1>useState hook for dynamic data :</h1>
                <Cardstate/>
            </div>
        </>

    )
}

export default Card