import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const footer = () => {
    return (
        <div className='footer'>
            <ul>
                <li><Link to=''>Home</Link></li>
                <li><Link to=''>About</Link></li>
                <li><Link to=''>Contact</Link></li>
                <li><Link to=''>API</Link></li>
                <li><Link to=''>Members</Link></li>
                <li><Link to=''>Terms</Link></li>
                <li><Link to=''>Data</Link></li>
                <li><Link to=''>Company</Link></li>
            </ul>
            <p>&copy; 2021 localHost</p>
        </div>
    )
}

export default footer
