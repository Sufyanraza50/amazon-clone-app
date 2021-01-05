import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';

const Header = () => {
    return (
        <nav className="header">
            <img className="header__logo" src="https://i.ibb.co/vD2hKBb/amazon-PNG25.png"  alt="amazon-logo" />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon  className="header__searchIcon" />
            </div>
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello User</span>
                    <span className="header__optionLineTwo">Sign In or Sign Out</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header;
