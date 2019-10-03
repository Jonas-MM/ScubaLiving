import React from 'react';
import padi from '../../img/padi.png'
import { NavLink, withRouter } from 'react-router-dom'
import CertifikatCSS from './CertifikatCSS.css'

const Certifikat = () => {
    return (

        <div className="container-fluid certifikatContainer p-3">
            <div className="p-3">
                <div className="row">
                    <div className="col-lg-12 span mb-5 ml-0 mr-0">
                        <span><h4>PADI - DYKKERCERTIFIKAT</h4></span>
                    </div>
                </div>

                <div className="row certifikat">
                    {/* <div className="col-lg-12 certifikat"> */}
                    <div className=" certifikatTxt text-left col-lg-9 p-lg-5">
                        <h4>TAG ET INTERNATIONALT ANERKENDT DYKKERCERTIFIKAT</h4>
                        <p>Her finder du et stort udvalg af dykkerkursuser lige fra begynder til professionel. Vi er et af Danmarks førende dykkercentre,
                            som uddanner fra PADI organisationen. Når du vælger at tage et dykkercertifikat hos os, får du ikke kun
                            et internationalt anerkendt certifikat til markedets bedste priser, du får også et dykkerkursus, hvor kvaliteten er i top
                            </p>
                        <br />
                        <p>Vi har kompetente instruktører på vores dykkerkursus. Erfaring, tillid og sikkerhed er vigtigt,
                            når du dykker med os, derfor står vi med et stort hold af kompetente instruktører.
                            </p>
                    </div>
                    <div className=" certifikatImg col-lg-3">
                        <img className="img-fluid" src={padi} alt="" />
                    </div>
                    {/* </div> */}
                </div>


                <div className="col-md-12 p-5 navLink">
                    <NavLink to="/certifikat"><h3>SE ALLE KURSER OG CERTIFIKATER HER!</h3></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Certifikat;