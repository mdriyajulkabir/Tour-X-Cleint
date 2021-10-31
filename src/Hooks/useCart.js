import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useCart = () => {
    const {user} = useFirebase();
    const {uid} = user;
    const [selectedBooking, setSelectedBooking] = useState([]);
    useEffect(()=>{
        fetch(`https://wicked-plague-18032.herokuapp.com/cart/${uid}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.length){
                setSelectedBooking(data)
            }
        })
        setSelectedBooking([])
    },[uid])
    function booking(service) {
        const isHave = selectedBooking.find(select => select._id === service._id);
        delete service._id;
        service.uid = uid;
        service.status = 'pending'
        if (isHave) { 
            alert("Already Booked!! Thanks For Booking......")
        } else {
            
            fetch('https://wicked-plague-18032.herokuapp.com/booking/add', {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(service)
            })
            .then(res=> res.json())
            .then(data =>{
                if(data.insertedId){
                    const newBooking = [...selectedBooking, service];
                    setSelectedBooking(newBooking)
                }
            })
        }
    }
    function remove (id){
        
        const selectAfterRemove = selectedBooking.filter((select)=> !(select._id === id));
        const url = `https://wicked-plague-18032.herokuapp.com/booking/add/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged ===! false){
                // const selectAfterRemove = selectedBooking.filter((select)=> !(select._id === id));
                setSelectedBooking(selectAfterRemove)
            }
           
            
        })
            // setSelectedBooking(selectAfterRemove)
           
    }
    return { booking, selectedBooking , remove,setSelectedBooking};
};

export default useCart;