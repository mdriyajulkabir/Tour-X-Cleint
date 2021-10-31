import React from 'react';
import ('./Footer.css')

const Footer = () => {
    return (
        <div className='row my-5 mx-auto ps-5 pe-5 pt-5 text-white footer-container'>
            <div className='col-lg-3 col-sm-6'>
            <h2><i className="fas fa-hand-holding-medical text-end">Support Life</i></h2>
                <h3><i class="fab fa-facebook"></i></h3>
                <h3><i class="fab fa-instagram-square"></i></h3>
                <h3><i class="fab fa-twitter"></i></h3>
                <h3><i class="fab fa-github-alt"></i></h3>
                <h3><i class="fab fa-staylinked"></i></h3>

            </div>
            <div className='col-lg-3 col-sm-6'>
                <h2>Our Departments</h2>
                <p>Hounlare & intensive care</p>
                <p>Home Care</p>
                <p>Caregives</p>
                <p>Diagnosis & Investigation</p>
                <p>Medical & Surgical</p>
                <p>Mental Health</p>
                <p>Specialized Support Service</p>
            </div>
            <div className='col-lg-3 col-sm-6'>
                <h2>Helpful Links</h2>
                <p>Who We Are</p>
                <p>Our Team Mission History</p>
                <p>Awards since 1990 - 2020</p>
                <p>Success Story </p>
                <p>specialized Support</p>
            </div>
            <div className='col-lg-3 col-sm-6'>
                <h2>Terms & Policies</h2>
                <p>Policies</p>
                <p>Terms of Use</p>
                <p>Code Of Conduct</p>
                <p>Privacy</p>
            </div>
        </div>
    );
};

export default Footer;