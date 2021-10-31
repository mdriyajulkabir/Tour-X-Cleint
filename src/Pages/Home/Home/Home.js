import React from 'react';
import GetOff from '../../GetOff/GetOff';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs/Blogs';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import WhyTourX from '../WhyTourX/WhyTourX';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <WhyTourX></WhyTourX>
            <GetOff></GetOff>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;