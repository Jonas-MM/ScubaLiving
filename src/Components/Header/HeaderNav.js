import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import HeaderNavCSS from './HeaderNavCSS.css'
import Logo from '../../img/ScubaLiving_logo_s.svg'
import Lock from '../../img/lock-icon.png'



const Navbar = () => {


    // handleLogin = () => {
    //     var person = prompt("Please enter your name", "Harry Potter");
    //     if (person != null) {
    //       document.getElementById("demo").innerHTML =
    //       "Hello " + person + "! How are you today?";
    //     }
    //   }


    return (
        <div>
            <div className="navbar container d-flex">
                <img className="logo" src={Logo} alt="" />
                <nav className="stroke">
                    <ul className="d-flex">
                        <li><NavLink to="/home">Hjem</NavLink></li>
                        <li><NavLink to="/udstyr">Udstyr</NavLink></li>
                        <li><NavLink to="/verden">Dykkerrejser</NavLink></li>
                        <li><NavLink to="/certifikat">Dykkerkurser</NavLink></li>
                        <li><NavLink to="/kontakt">Kontakt</NavLink></li>
                        <li><NavLink to="/omOs">Om os</NavLink></li>
                    </ul>
                </nav>
                <div className="formContainer">

                    <form className="FormSoeg" action="">
                        <label hidden for="site-search">Search the site:</label>
                        <input type="search" id="site-search" name="q"
                            aria-label="Search through site content" />
                        <button>Søg</button>
                    </form>
                    <form className="logIn" action="">
                        <img className="lockIcon" src={Lock} alt="" />
                        <button className="loginBtn"><NavLink to="/login">Login</NavLink></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Navbar);

{/* <div className="loginContainer">
                <form action="" id="demo">
                    <h4>Login</h4>
                    <input type="text" />
                    <hr />
                    <input type="text" />
                    <hr />
                    <a href="#">Forgot password?</a>

                    <button>LOGIN</button>

                    <a href="#">Opret bruger</a>
                </form>
            </div> */}






