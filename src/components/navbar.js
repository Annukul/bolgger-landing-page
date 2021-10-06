import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const navbar = () => {
    return (
        <header>
            <nav>
                <Link to='/'><img src="https://maxcdn.icons8.com/Android_L/PNG/512/Logos/get_pocket-512.png" alt="Logo" className='logo' /></Link>
                <ul>
                    <li><Link to='/discover'><strong>Discover</strong></Link></li>
                    <li><Link to='/featured'><strong>Featured</strong></Link></li>
                    <li><Link to='/saved'><strong>Saved</strong></Link></li>
                </ul>
            </nav>
            <div className='cred_btns'>
                <button className='login_btn'><Link to='/login'><strong>Login</strong></Link></button>
                <button className='signup_btn'><Link to='/signup'><strong>Signup</strong></Link></button>
            </div>
        </header>
    );
}

export default navbar;
