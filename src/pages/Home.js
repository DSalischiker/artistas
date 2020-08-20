import React from 'react';
import '../components/App/index.css';
import MainHome from '../components/MainHome';
import Layout from '../containers/Layout';
const Home = () => {

    return (
        <div className='App'>
            <Layout>
                <MainHome />
            </Layout>
        </div>
    )
}

export default Home;