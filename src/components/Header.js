import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
    return (
        <nav className="header">
            <img className="header__logo" src="https://i.ibb.co/vD2hKBb/amazon-PNG25.png" alt="amazon-logo" />
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                {/* First Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello User</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                {/* Second Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* Third Link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
            {/* Basket Icon with Number */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    {/* Number of items in the basket */}
                    <span className="header__optionLineTwo header__basketCount">2</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header;
