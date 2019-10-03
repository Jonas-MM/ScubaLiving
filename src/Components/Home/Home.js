import React from 'react'
import HomeBgr from './HomeBgr'
import UdstyrListe from '../Udstyr/UdstyrListe'
import Verden from '../Verden/Verden'
import VerdenTemplet from '../Verden/VerdenTemplet'
import VerdenListe from '../Verden/VerdenListe'
import Certifikat from '../Certifikat/Certifikat'

const Home = (props) => {
    return (
        <div className="container p-0">
            <HomeBgr />
            <UdstyrListe />
            <VerdenListe/>
            <Certifikat />
        </div>
    );
}

export default Home;
