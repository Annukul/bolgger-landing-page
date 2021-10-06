import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faColumns } from '@fortawesome/free-solid-svg-icons';
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';


export const Dashboard = () => {
    const currentpath = window.location.pathname;
    return (
        <div>
            <div className='dashhead'>
                <ul>
                    <li className='dash_one'><Link to='/'><img className='dashlogo' src='https://maxcdn.icons8.com/Android_L/PNG/512/Logos/get_pocket-512.png' alt='Logo' /></Link></li>
                    <li className='dash_mv'><Link to={`${currentpath}/profile`}>Profile</Link></li>
                    <li className='dash_mv'><Link to={`${currentpath}/manage`}>Manage</Link></li>
                </ul>
            </div>
            <div className='dashbar-content'>
                <div className='dashbar'>
                    <ul>
                        <div className='dashbar_one'>
                            <li><FontAwesomeIcon icon={faHome} /><Link to='/' className='dashbar_link'>Home</Link></li>
                            <li><FontAwesomeIcon icon={faUpload} /><Link to={`${currentpath}/updates`} className='dashbar_link'>Updates</Link></li>
                            <li><FontAwesomeIcon icon={faChartBar} /><Link to={`${currentpath}/stats`} className='dashbar_link'>Stats</Link></li>
                            <li><FontAwesomeIcon icon={faBell} /><Link to={`${currentpath}/notifications`} className='dashbar_link'>Notification</Link></li>
                            <li><FontAwesomeIcon icon={faEnvelope} /><Link to={`${currentpath}/messages`} className='dashbar_link'>Messages</Link></li>
                        </div>
                        <div className='dashbar_two'>
                            <li><FontAwesomeIcon icon={faPlusSquare} /><Link to={`${currentpath}/posts`} className='dashbar_link'>Posts</Link></li>
                            <li><FontAwesomeIcon icon={faColumns} /><Link to={`${currentpath}/pages`} className='dashbar_link'>Pages</Link></li>
                            <li><FontAwesomeIcon icon={faPhotoVideo} /><Link to={`${currentpath}/media`} className='dashbar_link'>Media</Link></li>
                            <li><FontAwesomeIcon icon={faCommentAlt} /><Link to={`${currentpath}/comments`} className='dashbar_link'>Comments</Link></li>
                            <li><FontAwesomeIcon icon={faIdBadge} /><Link to={`${currentpath}/contact`} className='dashbar_link'>Contact</Link></li>
                        </div>
                        <div className='dashbar_three'>
                            <li><FontAwesomeIcon icon={faTools} /><Link to={`${currentpath}/tools`} className='dashbar_link'>Tools</Link></li>
                            <li><FontAwesomeIcon icon={faCog} /><Link to={`${currentpath}/settings`} className='dashbar_link'>Settings</Link></li>
                        </div>
                    </ul>
                </div>
                <div className='dashcontent'>
                    <h1 className='dashcontent_head'>Dashboard</h1>
                    <div className='dashcontent_content'>
                        <Home />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard;