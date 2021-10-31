import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
import Footer from '../Pages/Home/Footer/Footer';
import Header from '../Pages/Home/Header/Header';

const PrivateRoute = ({children, ...rest}) => {
    const {contexts} = useAuth();
    if(contexts.loading){
      return (
        <>
        <Header></Header>
        <div className='text-danger text-center'>
          <Spinner animation="border" role="status">
             <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
        <Footer></Footer>
        </>
      );
    }

    return (
        <Route
        {...rest}
      render={({ location }) =>
        contexts.user.email ? (
          children
        ) : <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
          ></Redirect>}
        
        >
            
        </Route>
        
    );
};

export default PrivateRoute;