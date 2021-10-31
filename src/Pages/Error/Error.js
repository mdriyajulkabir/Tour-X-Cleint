import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import error from '../../Images/404.webp';

const Error = () => {
    return (
        <div>
            <Header></Header>
            <img src={error} className='ms-5 ps-5 w-50 d-flex justify-content-center ' alt="" />
            <Footer></Footer>
        </div>
    );
};

export default Error;