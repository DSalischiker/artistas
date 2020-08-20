import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const sayHi = 'Hi';
    const name = 'Mike';
    return (
        <header className="App-header">
            {`${sayHi} ${name}`}
            <Link to='/'>Home</Link>
        </header>
    );
}

export default Header;