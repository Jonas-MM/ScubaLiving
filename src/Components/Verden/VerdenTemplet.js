import React from 'react';
import VerdenCSS from './VerdenCSS.css'
import VerdenListe from './VerdenListe'

const VerdenTemplet = ({ verden }) => {
    return (
        
                <div className="verden col-lg-6">
                    <img src={"/img/" + verden.verdenImg} alt="" />
                    <div className="verdenTxt text-left">
                        <h4>{verden.verdenLand}</h4>
                        <p>{verden.verdenTxt}</p>
                    </div>
                </div>
            
    );
}

export default VerdenTemplet;