import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const Blogs = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://wicked-plague-18032.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <>
        <div className="mt-5">
        
        <h1 className="text-center">We Provide Most Proffesional Service
Since 2018</h1>
        
            
        <h3 className="text-center mb-5">Most Popular Places</h3>
        
        <div className="px-5 row row-cols-1 row-cols-md-3 gy-3">
            {
                services.map(service => <Services
                key={service._id}
                service={service}
                ></Services>)
            }
        </div>
        </div>
        </>
    );
};

export default Blogs;