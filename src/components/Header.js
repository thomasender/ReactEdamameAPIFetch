import React from 'react';
import './Header.css';

const Header = ({ title, description}) => {
    return(
        <div className="Header">
            <div className="headerBG">
                <h1>{title}</h1>
                <h2>{description}</h2>
            </div>

    
        </div>
        )      
}

export default Header;