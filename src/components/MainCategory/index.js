import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card';
import '../App/index.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const MainCategory = ({ catId }) => {
    const [artists, setArtists] = useState([]);
    console.log('estoy');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get('https://artists-api.vercel.app/artists');
                const data = response.data;
                console.log('WO', data);
                const artistsFiltered = data.filter(artist => artist.genre === catId);
                console.log('WOOO', artistsFiltered);
                setArtists(artistsFiltered);
            } catch (error) {
                console.error('este es mi error', error);
            }
        }
        fetchData();
    }, [catId])
    return (
        <div className="Main-category">
            <h1>Artistas de {catId}</h1>
            <div className='Main-grid'>
                {console.log(artists)}
                {artists.map((artist) =>
                    <Card key={artist._id} data={artist} />
                )}

            </div>
        </div>
    )
}

export default MainCategory;