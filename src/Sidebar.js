import React from 'react';
import './Sidebar.css';
import images from './components/images';

function Sidebar() {
    return (
        <div className='sidebar'>
            <img className='sidebar__logo' src={images.spotifyLogo} alt="spotifyLogo" />
        </div>
    )
}

export default Sidebar
