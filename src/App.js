import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  // Run Code based on a given condition
  useEffect(() => {

    const hash = getTokenFromUrl();
    console.log("HASH >>> ", hash);

    // if we don't wanna to see token in URL
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token)

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log("SHOW ME USER", user);
      })
    }

    console.log("I HAVE A TOKEN >>> ", _token)
  }, []);


  return (
    <div className="App">
      {
        token ? (<Player />) : (<Login />)
      }

    </div>
  );
}

export default App;
