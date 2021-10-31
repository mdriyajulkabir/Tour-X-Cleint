import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo.png'


const Header = () => {
    const {contexts} = useAuth();
    return (
        <>
            <Navbar bg="secondary gradient" className='sticky-top' variant="dark" collapseOnSelect expand="lg ">
            <Container>
                <Navbar.Brand href="#home"> <img src={logo} alt="" /> </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse  className=' justify-text-end fw-normal'>
                <Nav className="me-auto">
                <Nav.Link>
                    <Link style={{color:'black', textDecoration:'none'}} to='/home'>Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'black', textDecoration:'none'}} to='/ourservices'>Services</Link> 
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'black', textDecoration:'none'}} to='/contactus'>Contact Us</Link> 
                </Nav.Link>
                <Nav.Link>
                    <Link style={{color:'black', textDecoration:'none'}} to='/aboutus'>About Us</Link> 
                </Nav.Link>
                
                {contexts.user.email && <Nav.Link>
                    <Link style={{color:'black', textDecoration:'none'}} to='/dashboard'>DashBoard</Link> 
                </Nav.Link>}
                
                {
                    contexts.user.email ?<Nav.Link style={{color:'black', textDecoration:'none'}} onClick={contexts.logOut}>Sign Out
                     </Nav.Link>:<Nav.Link>
                    <Link style={{color:'black', textDecoration:'none'}} to='/login'>Sign In</Link> 
                </Nav.Link>}
                {
                    contexts.user.email && <Nav.Link style={{color:'black', textDecoration:'none'}}>{contexts.user.displayName}</Nav.Link>
                }
                
                
               
                </Nav>
                {/* <Navbar.Brand href="#home" style={{color:'#E12454'}}> <i className="fas fa-ambulance"></i>        <i className="fas fa-phone-alt">+1 234 567 8989</i></Navbar.Brand> */}
                </Navbar.Collapse>

                
            </Container>
            </Navbar>
            {/* {
                    user.email ?
                     <button onClick={logOut}>Sign Out</button>:
                    <Link style={{color:'', textDecoration:'none'}} to='/signin'>Sign In</Link> 
                } */}
        </>
    );
};

export default Header;