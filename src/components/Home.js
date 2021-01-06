import React from 'react'
import './Home.css';
import Product from './Product';

export const Home = () => {
    return (
        <div className="home">
            <img className="home__image" src="https://i.ibb.co/RPpKwv6/newbannerhelp-1200-amazon-glacier-final-01-01.png" alt="banner-image" />
            <div className="home__row">
                <Product 
                    id="121314"
                    title="The Lean Startup: How contant innovation"
                    price={11.96}
                    rating={4}
                    image="https://i.ibb.co/M2PQy0m/81jg-Ci-NJPUL.jpg" 
                />
                <Product 
                    id="121314"
                    title="The Lean Startup: How contant innovation"
                    price={15.44}
                    rating={5}
                    image="https://i.ibb.co/M2PQy0m/81jg-Ci-NJPUL.jpg" 
                />
                <Product 
                    id="121314"
                    title="The Lean Startup: How contant innovation"
                    price={9.99}
                    rating={3}
                    image="https://i.ibb.co/M2PQy0m/81jg-Ci-NJPUL.jpg" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="121314"
                    title="The Lean Startup: How contant innovation"
                    price={11.96}
                    rating={4}
                    image="https://i.ibb.co/M2PQy0m/81jg-Ci-NJPUL.jpg" 
                />
                <Product 
                    id="121314"
                    title="The Lean Startup: How contant innovation"
                    price={15.44}
                    rating={5}
                    image="https://i.ibb.co/M2PQy0m/81jg-Ci-NJPUL.jpg" 
                />
                <Product 
                    id="121314"
                    title="The Lean Startup: How contant innovation"
                    price={9.99}
                    rating={3}
                    image="https://i.ibb.co/M2PQy0m/81jg-Ci-NJPUL.jpg" 
                />
            </div>
            <div className="home__row">
            <Product 
                    id="121314"
                    title="The Lean Startup: How contant innovation"
                    price={15.44}
                    rating={5}
                    image="https://i.ibb.co/M2PQy0m/81jg-Ci-NJPUL.jpg" 
                />
                <Product 
                    id="121314"
                    title="The Lean Startup: How contant innovation"
                    price={9.99}
                    rating={3}
                    image="https://i.ibb.co/M2PQy0m/81jg-Ci-NJPUL.jpg" 
                />
            </div>
        </div>
    )
}

export default Home;
