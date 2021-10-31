import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './services.css'

const Services = ({service}) => {
    const {_id,name, description, time, img,price,rating} = service;
    const {booking} = useAuth();
    return (
        <div>
            
  <div className="col">
    <div className="card h-100">
      <img src={img} className="card-img-top h-25 w-100 " alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}.</p>
        <div className='d-flex justify-content-between'>
        <p><i class="fas fa-clock"></i> {time}  </p>
        <p><i class="fas fa-dollar-sign"></i> {price}  </p>

        </div>
        <p>Ratings: {rating}</p>
        
        
        
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

export default Services;