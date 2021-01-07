import React from 'react';

import { Link } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = () => {
    return (
        <div className="navlinks">
            <div className="navlinks__outer">
                <div className="navlinks__inner">
                    <Link>Today's Deals</Link>
                    <Link>Customer Service</Link>
                    <Link>Gift Cards</Link>
                    <Link>Registry</Link>
                    <Link>Sell</Link>
                </div>
            </div>
        </div>
    )
}
export default NavLinks;
