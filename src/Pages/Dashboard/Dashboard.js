import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const Dashboard = () => {
    return (
        <div>
            <Header></Header> <br />
            <Link style={{color:'black', textDecoration:'none'}} className='details p-3 text-center m-5 ' to='/myorder'> My Order</Link>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;