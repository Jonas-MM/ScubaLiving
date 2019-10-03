import React, { useState } from 'react'
import Udstyr from './Udstyr';
import { NavLink, withRouter } from 'react-router-dom'

const UdstyrListe = () => {

    const [udstyr] = useState([
        { udstyrImg: "/udstyr1.gif", beskrivelse: "REGULATOR MED RESIT", pris: "KR. 899,-" },
        { udstyrImg: "/udstyr2.png", beskrivelse: "REJSEFINNE", pris: "KR. 999,-" },
        { udstyrImg: "/udstyr3.png", beskrivelse: "REJSEFINNE", pris: "KR. 999,-" },
        { udstyrImg: "/udstyr4.png", beskrivelse: "COLDWATER GLOVES", pris: "KR. 1499,-" }
    ]);

    let UdstyrListe = udstyr.map(
        u => {
            return (
                <Udstyr udstyr={u} />

            )
        }
    )


    return (
        <div className="udstyr container">
            <div className="row spanRow m-3">
                <div className="span col-lg-12 ">
                    <span><h4>MEST POPULÆRE DYKKERUDSTYR</h4></span>
                </div>
            </div>
            <div className="row">
                {/* <div className="udstyrListe d-flex col-md-12"> */}
                    {UdstyrListe}
                {/* </div> */}
            </div>
            <div className="row">
                <div className="col-md-12 navLink">
                    <NavLink to="/udstyr"><h3>SE MERE LÆKKERT UDSTYR HER!</h3></NavLink>
                </div>
            </div>

        </div>
    );
}

export default UdstyrListe;