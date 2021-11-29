import React from 'react';
import './Sidebar.css';
import images from './components/images';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {

    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className='sidebar'>
            <img className='sidebar__logo' src={images.spotifyLogo} alt="spotifyLogo" />

            <SidebarOption title='Home' Icon={HomeIcon} />
            <SidebarOption title='Search' Icon={SearchIcon} />
            <SidebarOption title='Your Library' Icon={LibraryMusicIcon} />

            <br />
            <strong className='sidebar__title'>PLAYLIST</strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}


            {/* <SidebarOption title='Rock' /> */}
            {/* <SidebarOption title='Soft' /> */}
            {/* <SidebarOption title='Party' />  */}
        </div>
    )
}

export default Sidebar;
