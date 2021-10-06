import React from 'react';
import pattern from '../../images/pattern17.jpg';

const Options = () => {
    return (
        <div className="login_image" style={{ backgroundImage: `url(${pattern})` }}>
            <nav>
                <a>About</a>
                <a>Contact</a>
                <a>Developers</a>
                <a>Carrers</a>
            </nav>
            <footer>
                <p>&copy; 2021</p>
                <div className="social-links">
                    <a><i className="fab fa-twitter-square"></i></a>
                    <a><i className="fab fa-facebook-square"></i></a>
                    <a><i className="fab fa-instagram-square"></i></a>
                    <a><i className="fab fa-github-square"></i></a>
                </div>
            </footer>
        </div >
    );
}

export default Options;