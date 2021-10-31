import React from 'react';
import './GetOff.css'
import logo from '../../Images/logo.png';
import couple from '../../Images/discount_single.png';
import playstore from '../../Images/playstore.png';
import appstore from '../../Images/appstore.png';

const GetOff = () => {
    return (
        <div>

            <div className="row mt-5 mx-4">
                <div className="detail col-lg-4 col-md-4 col-sm-12 mb-3">
                    <div>
                        <p className='fs-3'> <span className='fw-bolder'>Amazing</span> Tours And Fun <br /> Adventures <span className='fw-bolder'>Waiting For <br /> You </span></p>
                    </div>
                </div>
                <div className="detail col-lg-4 col-md-4 col-sm-12 mb-3">
                    <p className='fs-3'>Choose The <span className='fw-bolder'>Destination <br />Just Right</span> For Your <br /> Vacation</p>
                </div>
                <div className="detail col-lg-4 col-md-4 col-sm-12 mb-3">
                    <p className='fs-3'>
                        Special <span className='fw-bolder'>Deals And <br /> Last Minute</span> Amazing <br /> Offers
                    </p>
                </div>
            </div>
            <div className='row mt-4'>
                <div className="col-lg-7 col-md-7 col-sm-12 d-flex justify-content-center align-items-center ps-3">
                    <span>
                    <h1><img src={logo} alt="" /></h1>
                    <h4>For the First time Log in And Booking</h4>
                    <span>Get 25% Off</span>
                    <h4>SPEND A BEST HOLIDAYS WITH US</h4>
                    <br />
                    <div>
                        <img className='me-4' src={playstore} alt="" />
                        <img src={appstore} alt="" />
                    </div>
                    </span>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 pe-4">
                    <img className='img-fluid' src={couple} alt="" />
                </div>
            </div>
        </div>
    );
};

export default GetOff;