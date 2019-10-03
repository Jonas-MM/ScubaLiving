import React from 'react'
import UdstyrListe from './UdstyrListe.js'
import UstyrCSS from './UdstyrCSS.css'

const Udstyr = ({ udstyr }) => {

    return (


        <div className=" col-lg-3 col-md-6 udstyrListe p-3">
            <div className="card text-center">
                <img className="img-fluid mx-auto grow" src={"/img/" + udstyr.udstyrImg} alt="" />
                <h4>{udstyr.beskrivelse}</h4>
                <p>{udstyr.pris}</p>
            </div>
        </div>
    );
}

export default Udstyr;