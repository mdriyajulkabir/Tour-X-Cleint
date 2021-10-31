import React, { createContext } from 'react';
import useCart from '../Hooks/useCart';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = (props) => {
    const {children} = props;
    const allContexts = useFirebase();
    const {booking, selectedBooking , remove,setSelectedBooking} = useCart();
    const data = {
        contexts:allContexts,
        booking,
        selectedBooking,
        remove,
        setSelectedBooking
    };
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;