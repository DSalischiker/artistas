import React from 'react';
import '../components/App/index.css';
import Layout from '../containers/Layout';
import MainArtist from '../components/MainArtist';
import {
    useParams
} from 'react-router-dom';
const Artist = () => {
    const { id } = useParams();

    //Hacer lo que quiera con el id (useEffect y traer data)
    return (
        <div className='App'>
            <Layout>
                <MainArtist />
            </Layout>
        </div>
    )
}

export default Artist;