import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';


function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <p>Album and song details</p>
            </div>

            <div className="footer__center">
                <ShuffleIcon className='footer__green' />
                <SkipPreviousIcon className='footer__icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
                <SkipNextIcon className='footer__icon' />
                <RepeatIcon className='footer__green' />
            </div>

            <div className="footer__right">
                <p>Volume Controls</p>
            </div>
        </div>
    )
}

export default Footer
