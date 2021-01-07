import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div className="footerarea">
            <div className="footerarea__top">
                <p>Back to Top</p>
            </div>
            <div className="footerarea__links">
                <div className="footerarea__linkarea">
                    <span>Contact Us</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Products</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Term's & Conditions</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>FAQ's</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;