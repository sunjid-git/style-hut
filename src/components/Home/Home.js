import React from 'react';
import './Home.css';
import ProductHome from '../ProductHome/ProductHome'
import illustration from "../../images/illustration.png";


const Home = () => {
    return (
        <div>
            <div className="home-page">
                <div className="home-left">Left</div>
                <div className="home-right">
                    <figure>
                        <div className="img-area">
                            <img src={illustration} alt="illustration" />
                      
                        </div>
                    </figure>
                </div>
            </div>
            <ProductHome></ProductHome>
        </div>
    )
}

export default Home
