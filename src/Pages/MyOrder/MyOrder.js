import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core"
import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import useAuth from '../../Hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import { Link , useHistory} from 'react-router-dom';
library.add(fullStar, emptyStar);
const MyOrder = () => {
    const history = useHistory()
    const { selectedBooking, remove,setSelectedBooking } = useAuth();
    const totalPrice = selectedBooking.reduce((total,booking)=>total + booking.price, 0)
    return (
        <div>
            <Header></Header>
            {selectedBooking.length ? <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12">
                    {
                        selectedBooking.map(booking => (
                            <div className="row mb-4" key={booking.id}>
                                <div className="col-lg-4 col-md-4">
                                    <img src={booking.img} className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <h4>Name: {booking.name}</h4>
                                    <p>Description: {booking.description}</p>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <p><i class="fas fa-clock"></i> {booking.time}  </p>
                                            <p><i class="fas fa-dollar-sign"></i> {booking.price}  </p>
                                            <div>
                                                <Col>
                                                    <Rating
                                                        readonly
                                                        style={{ color: "goldenrod" }}
                                                        initialRating={booking.rating}
                                                        emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                                        fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                                    />{" "}
                                                    {booking.rating}
                                                </Col>

                                            </div>
                                        </div>
                                        <div>
                                            <Link className='details d-flex align-items-center justify-content-center rounded-3 py-2 mb-2 ' style={{ textDecoration: 'none' }} to={`/details/${booking._id}`}>Details</Link>
                                            <button className='details rounded-3 py-2' onClick={() => remove(booking._id)} >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h1>{selectedBooking.length} Items Booked</h1>
                    <h4>Total Price : {totalPrice.toFixed(2)}</h4>
                    <button onClick={()=>{
                        alert('Thanks For booking')
                        setSelectedBooking([])
                        history.push('/')
                    }} className='btn btn-primary'>Check Out</button>
                </div>
            </div> :
                <div> <h1 className='text-danger text-center'>No Booking Found</h1></div>
            }



            <Footer></Footer>
        </div>
    );
};

export default MyOrder;