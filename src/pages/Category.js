import React from 'react';
import '../components/App/index.css';
import Layout from '../containers/Layout';
import MainCategory from '../components/MainCategory';
import {
    useParams
} from 'react-router-dom';
const Category = () => {
    const { catId } = useParams();

    //Hacer lo que quiera con el id (useEffect y traer data)
    return (
        <div className='App'>
            <Layout>
                <MainCategory catId={catId} />
            </Layout>
        </div>
    )
}

export default Category;