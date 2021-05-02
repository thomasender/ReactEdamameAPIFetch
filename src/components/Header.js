import React from 'react';
import './Header.css';
import reactLogo from './React-icon.svg';

const Header = ({ title, description}) => {
    return(
        <div className="Header">
            <img className="logo" src={reactLogo} alt="react Logo" />
            <div className="headerBG">
                <h1>{title}</h1>
                <h2>{description}</h2>
                
            </div>

    
        </div>
        )      
}

export default Header;