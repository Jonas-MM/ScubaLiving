import React from 'react'
import Footer from './Footer.css'
import { NavLink, withRouter } from 'react-router-dom'

const footer = () => {
    return (
        <footer >
            <div className="container">
                <nav className="footerNav">
                    <ul>
                        <li><h6>PRAKTISKE OPLYSNINGER</h6></li>
                        <li>Om Scuba Living</li>
                        <li>Kontakt</li>
                        <li>Handelsbetingelser</li>
                        <li>Persondatapolitik</li>
                        <li>Åbningstider</li>
                    </ul>
                    <ul>
                        <li><h6>PRAKTISKE OPLYSNINGER</h6></li>
                        <li>Hovedkategorier</li>
                        <li><NavLink to="/udstyr">Udstyr</NavLink></li>
                        <li><NavLink to="/verden">Dykkerrejser</NavLink></li>
                        <li><NavLink to="/certifikat">Dykkerkurser</NavLink></li>
                        <li>Service</li>
                    </ul>
                    <ul>
                        <li><h6>SOCIALE MEDIER - FØLG OS HER:</h6></li>
                        <li>Facebook <i class="fab fa-facebook-square"></i></li>
                        <li>LinkedIn <i class="fab fa-linkedin"></i></li>
                        <li>Instagram  <i class="fab fa-instagram"></i></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default footer;