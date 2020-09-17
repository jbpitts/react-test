import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to='/books/create' className="item">
                Create a Book
            </Link>
            <div className="right menu">
                <Link to='/' className="item">
                    All books
                </Link>
            </div>
        </div>
    );
};

export default Header;