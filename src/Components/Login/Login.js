import React from 'react'
import LoginCSS from './LoginCSS.css'


const Login = () => {
    return (

        <div className="container loginContainer">
            <form action="/home" method="post">
                <div class="container pt-4">
                    <div>
                        <label className="pr-2" for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" id="uname" name="uname" required />
                    </div>

                    <div>
                        <label className="pr-3" for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" id="uname" name="psw" required />
                    </div>

                    <div>
                        <button className="btn mt-4" type="submit">Login</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;