import React from 'react';
import { Link } from 'react-router-dom';
// import banner from '../../../Images/banner.jpeg';
import './Banner.css';
const Banner = () => {
    return (
        <div className="main-image">
            <div className="containers">
                <h1><span className='cen'>Tour-x</span></h1>
                <h5><span className='fs-3'>Travel With Us</span></h5>
                <span className='cen2'>Enjoy Adventure</span> 
                <span className='cen2'>Enjoy Holiday</span>
                <Link className='button' to='/aboutus'>About Us</Link>
            </div>
        </div>
    );
};

export default Banner;