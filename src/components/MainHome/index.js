import React, { useState, useEffect } from 'react';
import Card from '../Card';
import Axios from 'axios';
const MainHome = () => {
    /* var request = require('request'); // "Request" library

    var client_id = 'b5e9b1c1691a43d3bdf787c9cd5f1cc1'; // Your client id
    var client_secret = '68290162d1a04518abf441b36d09d922'; // Your secret

    // your application requests authorization
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {

            // use the access token to access the Spotify Web API
            var token = body.access_token;
            var options = {
                url: 'https://api.spotify.com/v1/playlists/5qTogUGumSAocuvB5N5JqG/tracks?fields=items(track(artists(id, name)))',
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            };
            request.get(options, function (error, response, body) {
                //console.log(body.items[0].track.artists[0]);
                //console.log(response.body.items)
                const artistasSpoti = response.body.items.map((track) => {
                    return track.track.artists[0];
                })
                console.log(artistasSpoti);

                const artistasList = artistasSpoti.map(({ name }) => name);
                const artistasSpotiUnrepeated = new Set(artistasList);
                const artistasSpotiArray = [...artistasSpotiUnrepeated];
                console.log(artistasSpotiArray);

            });

        }
    }); */

    const [artists, setArtists] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get('https://artists-api.vercel.app/artists');
                const data = response.data;
                setArtists(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();

    }, []);
    return (
        <div className="App-main">
            <h1>Listado de Artistas</h1>
            <div className='Main-grid'>
                {artists.map((artist) =>
                    <Card key={artist._id} data={artist} />
                )}

            </div>
        </div>
    )
}

export default MainHome;

/* this.state = {
    counter: 0,
    user: ''
}
this.setState({
    counter: 1
})
const [counter, setCounter] = useState(0)
const [user, setUser] = useState('')
const [users, setusers] = useState([{ name: 'Lean', edad: '35' }, { name: 'Pepe', edad: '35' }, { name: 'Mike', edad: '35' }])

/* contador = 5; //ESTA SUPER MAL */

