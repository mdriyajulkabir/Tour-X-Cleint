
import React, { } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const SignIn = () => {
    const {contexts} = useAuth();
    const {singinUsingGoogle} = contexts
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home'
    const handleGoogleLogIn = ()=>{
        singinUsingGoogle()
        .then(result=>{
            history.push(redirect)
        })
        .catch(error=>{
          console.log(error.message);
        })
        
    }
    
    return (
        <div>
            <Header></Header>
            <h1 className='text-center'>Sign In</h1>
            

            

<br />
<div className='d-flex justify-content-center'>
    <button className='btn btn-warning' onClick={handleGoogleLogIn}>Google sign in</button>
</div>

            <Footer></Footer>
        </div>
    );
};

export default SignIn;