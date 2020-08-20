import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Axios from 'axios';
const Header = (props) => {
    const sayHi = 'Hi';
    const name = 'Mike';

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get('https://artists-api.vercel.app/artists');
                const data = response.data;
                const cats = data.map(category => category.genre);
                //crear array sin data repetida
                const catsUnrepeated = new Set(cats);
                const catsArray = [...catsUnrepeated];

                setCategories(catsArray);
                console.log(catsArray);

            } catch (error) {
                console.error('este es mi error', error);
            }
        }
        fetchData();
    }, [])

    const handleCategorySelect = (event) => {
        console.log(event.target.value);
        props.history.push(`/category/${event.target.value}`);
    }
    return (
        <header className="App-header">
            {`${sayHi} ${name}`}
            <Link to='/'>Home</Link>
            <select name='cat' id='' onChange={handleCategorySelect}>
                {categories.map(category => <option key={category} value={category}>{category}</option>)}
            </select>
        </header>
    );
}

export default withRouter(Header);