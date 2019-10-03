import React, { useState } from 'react';
import VerdenTemplet from './VerdenTemplet';
import { NavLink, withRouter } from 'react-router-dom'

const VerdenListe = () => {

    const [verden] = useState([
        { verdenImg: "/norge.jpg", verdenLand: "Malta", verdenTxt: "Oplev skønne malta og det helt fantastiske dyreliv og sammenhold. Vi arrangerer dykkerrejser til malta hele året rundt" },
        { verdenImg: "/malta.jpg", verdenLand: "Norge", verdenTxt: "Nordeuropas bedste dykkersports ligger i Norge. Vi har 25 års erfaring med dyk i Norge. Oplev det klareste vand i verden!" }
    ])

    let VerdenListe = verden.map(
        v => {
            return (
                <VerdenTemplet verden={v} />
            )
        }
    )


    return (
        <div className="container">
            <div className="span m-3">
                <span><h4>DYK UD I VERDEN</h4></span>
            </div>
            <div className="row">

            {/* <div className="container d-flex verdenListe"> */}
                {VerdenListe}
            {/* </div> */}
            </div>
            <div className="col-md-12 p-5 navLink">
            <NavLink to="/verden"><h3>SE FLERE DESTINATIONER OG MULIGHDER HER!</h3></NavLink>
            </div>
        </div>
    );
}

export default VerdenListe;