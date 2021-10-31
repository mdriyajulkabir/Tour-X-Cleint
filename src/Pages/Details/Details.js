import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import './Details.css'

const Details = () => {
  const { id } = useParams();
  const { booking } = useAuth();
  const [service, setService] = useState({})
  useEffect(() => {
    fetch(`https://wicked-plague-18032.herokuapp.com/services/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
  }, [])
  return (
    <div>
      <Header></Header>
      <div className="px-5 row my-5 gy-3 ">
        <div className="col-lg-12 col-md-6 col-sm-12 d-flex justify-content-center">
          <div className="card details w-25 h-100">
            <img src={service.img} className="card-img-top h-50 w-100 " alt="" />
            <div className="card-body">
              <h5 className="card-title">{service.name}</h5>
              <p className="card-text">{service.description}</p>
              <p>Available Doctor: {service.time}</p>
              <button onClick={() => booking(service)} className='details  px-3 rounded-pill py-3'>Booking</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Details;