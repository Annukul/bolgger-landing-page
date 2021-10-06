import React from 'react';
import Options from './options';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login_container">
            <div className="login_form">
                <div className="login_form_inside">
                    <h1 className="login_head"><span className="grey_head">Let's</span> connect</h1>
                    <p className="login_message">Welcome back, please login back to your account.</p>
                    <form action="">
                        <div className="form_inputs">
                            <label for="email">Email:</label>
                            <input type="email" name="email" />
                        </div>
                        <div className="form_inputs">
                            <label for="password">Password:</label>
                            <input type="password" name="password" />
                        </div>
                        <div className="rm_fp">
                            <div className="rm">
                                <input type="checkbox" name="rememberme" id="" value="Remember me" /><span> Remember me</span>
                            </div>
                            <a href="#">Forgot password?</a>
                        </div>
                        <div className="form_submits">
                            <button type="submit" name="login">Login</button>
                            <Link to='/signup'>
                                Sign up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <Options />
        </div>
    );
}

export default Login