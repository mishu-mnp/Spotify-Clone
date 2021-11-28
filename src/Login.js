import React from 'react';
import './Login.css';
import images from './components/images';
import { loginUrl } from './spotify';

function Login() {

    return (
        <div className='login'>
            <img src={images.spotifyLogo} alt="spotifylogo" />

            <a href={loginUrl} >LOGIN WITH SPOTIFY</a>
        </div >
    )
}

export default Login
