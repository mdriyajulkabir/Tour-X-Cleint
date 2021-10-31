import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import OurServices from "./Pages/OurServices/OurServices/OurServices";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import SignIn from "./Pages/SignIn/SignIn";
import AuthProvider from "./Contexts/AuthProvider";
import PrivateRoute from "./Private/PrivateRoute";
import Details from "./Pages/Details/Details";
import Error from "./Pages/Error/Error";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Dashboard from "./Pages/Dashboard/Dashboard";


function App() {
  return (
    <>
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/ourservices'>
            <OurServices></OurServices>
          </PrivateRoute>
          <PrivateRoute path='/myorder'>
              <MyOrder></MyOrder>
          </PrivateRoute>
          <Route path='/contactus'>
              <ContactUs></ContactUs>
          </Route>
          <Route path='/aboutus'>
              <AboutUs></AboutUs>
          </Route>
          <Route path='/login'>
              <SignIn></SignIn>
          </Route>
          <PrivateRoute path='/details/:id'>
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
