import React from 'react';
import { Link } from 'react-router-dom';
const Card = props => {
    const { avatar, genre, name, _id } = props.data;
    return (
        <Link to={`/artist/${_id}`}>
            <div className='Main-card'>
                <img src={avatar} alt={name} />
                <div className='Card-text'>
                    <h2>{name}</h2>
                    <p>{genre}</p>
                </div>
            </div>
        </Link>
    );
}

export default Card;