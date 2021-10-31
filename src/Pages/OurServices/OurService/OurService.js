import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const OurService = ({service}) => {
    const {_id,name, description, time, img} = service;
    const {booking} = useAuth();
    return (
        <div>
            <div className="col">
    <div className="card h-100">
      <img src={img} className="card-img-top " height="300px" alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}.</p>
        <p>Doctor: {time}</p>
      </div>
      <div  className='row d-flex justify-content-between'>
          <div className="col-lg-6 col-md-6 col-sm-12 px-5 mb-3">
          <div className='detail-btn'>
          <Link className='details d-flex align-items-center justify-content-center rounded-pill py-3 ' style={{ textDecoration:'none'}} to={`/details/${_id}`}>Details</Link>
          </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12  d-flex justify-content-center align-items-center mb-3">
          <button onClick={()=>booking(service)} className='details  px-3 rounded-pill py-3'> Booking</button>
          </div>
      </div>
    </div>
  
</div>
        </div>
    );
};

export default OurService;