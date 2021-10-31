import React from 'react';
import logo from '../../../Images/logo.png'
import choose1 from '../../../Images/choose-1.png'
import choose2 from '../../../Images/choose-2.png'
import choose3 from '../../../Images/choose-3.png'
const WhyTourX = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-center'>Why <img src={logo} alt="" /></h1>
            <p className='px-4 text-center'>The travel business has been consistently changing since leisure tourism started. <br /> The changes come with the culture of the time. Think back to the famous Pan Am era when flyers…</p>
            <div className="row ">
                <div className="px-5 text-center col-lg-4 col-md-4 col-sm-12">
                    <img className='w-25 mb-4' src={choose1} alt="" />
                    <h2>Safe Travle</h2>
                    <p>Travel can be an exciting, eye-opening experience. It’s easy to get caught up in the thrill of adventure. But don’t forget about travel security and safety considerations while you’re abroad.</p>
                </div>
                <div className="px-5 text-center col-lg-4 col-md-4 col-sm-12">
                <img className='w-25 mb-4' src={choose2} alt="" />
                <h2>Awesome Guide</h2>
                <p>Some people prefer to use paper travel guide books.But Our guides are really awesome. They can try their best to enjoy your adventure and Protect you as a body-guird.</p>
                </div>
                <div className=" px-5 text-center col-lg-4 col-md-4 col-sm-12">
                <img className='w-25 mb-4' src={choose3} alt="" />
                <h2>Save Money</h2>
                <p>We can give you a very good trip for the least amount of money. We have a lot of benefits at a low cost that no one else can give. You can't imagine going to so many places at such a low cost. Contact us now without delay</p>
                </div>
            </div>
        </div>
    );
};

export default WhyTourX;