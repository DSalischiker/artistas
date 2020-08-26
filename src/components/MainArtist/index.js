import React from 'react';
import { useParams } from 'react-router-dom';
import '../App/index.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const MainArtist = () => {
    const { id } = useParams();

    const [artist, setArtist] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get('https://artists-api.vercel.app/artists');
                const data = response.data;
                const artistFiltered = data.find(artist => artist._id === id);
                setArtist(artistFiltered);
            } catch (error) {
                console.error('este es mi error', error);
            }
        }
        fetchData();
    }, [])
    return (
        <div className='Main-artist'>
            <div className='Artist-card'>
                <h1 className='Artist-title'>Artista</h1>
                <h2 className='Artist-name'>{artist.name}</h2>
                <img className='Artist-img' src={artist.avatar} alt={artist.name} />
                <p className='Artist-genre'>{artist.genre}</p>
            </div>
        </div>
    )
}

export default MainArtist;