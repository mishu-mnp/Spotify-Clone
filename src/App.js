import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { useDataLayerValue } from './DataLayer';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './spotify';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

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

    }

    console.log("I HAVE A TOKEN >>> ", _token)
  }, []);

  console.log("SHOW ME USER", user);
  console.log("TOKEN >>> ", token);

  return (
    <div className="App">
      {
        token ? (<Player />) : (<Login />)
      }

    </div>
  );
}

export default App;
