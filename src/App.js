import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { useDataLayerValue } from './DataLayer';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();

  // Run Code based on a given condition
  useEffect(() => {

    const hash = getTokenFromUrl();
    console.log("HASH >>> ", hash);

    // if we don't wanna to see token in URL
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      // setToken(_token)

      spotify.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });


      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })

      spotify.getPlaylist('7lrDL9UQMIefwIWdUqWPGu').then(response =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }

    // console.log("I HAVE A TOKEN >>> ", _token)
  }, []);

  // console.log("SHOW ME USER", user);
  // console.log("TOKEN >>> ", token);

  return (
    <div className="App">
      {
        token ? (<Player spotify={spotify} />) : (<Login />)
      }

    </div>
  );
}

export default App;
