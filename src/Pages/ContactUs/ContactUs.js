import React from 'react';
import Header from '../Home/Header/Header';
import './ContactUs.css'
import Footer from '../Home/Footer/Footer';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <div>
            <Header></Header>
            <div className="contact-banner">          
      <div className="contact-slider">
        <img id="contact-slideImg" src="https://image.freepik.com/free-photo/closeup-business-woman-hand-typing-laptop-keyboard-with-m_1232-2746.jpg" alt="" />
      </div>
      <div className="contact-overlay">
        <div className="contact-content">
          <h4 className='contact-con'><span style={{fontWeight:'900',color:'skyblue'}}>Ｃ</span>ＯＮＴＡＣＴ </h4>
          <Container>
              <Row>
                  <Col><p><small style={{ color:'white'}}>ＷＥ’ＲＥ  ＡＬＷＡＹＳ  ＯＰＥＮ  ＴＯ  ＴＡＬＫ  ＴＯ <br /> ＧＯＯＤ  ＰＥＯＰＬＥ</small></p></Col>
                  <Col><p><small  style={{ color:'white'}}><i class="fas fa-phone-volume"></i>  +17 3849 0434 44 <br /><i class="fas fa-envelope"></i> xtra@travel.yahoo.info</small></p> </Col>
              </Row>
          </Container>
        </div>
      </div>
    </div>
    <div style={{textAlign:'center', }} className='p-5'>
        <h2 className='p-4'>ＨＡＶＥ Ａ ＱＵＥＳＴＩＯＮＳ?</h2>
        <Container>
              <Row>
                  <Col>
                    <Row>
                    <Col><h1><i class="fas fa-phone-square-alt"></i></h1></Col>
                        <Col>
                            <h6>🅒🅐🅛🅛 🅤🅢</h6>
                            <p>+61 3 8376 6284</p>
                        </Col>
                    </Row>
                  </Col>
                  <Col> 
                    <Row>
                    <Col><h1><i class="fas fa-map-marker-alt"></i></h1></Col>
                        <Col>
                            <h6>🅐🅓🅓🅡🅔🅢🅢</h6>
                            <p>245 Quigley Blvd,Ste K</p>
                        </Col>
                    </Row>
                  </Col>
                  <Col> 
                    <Row>
                        <Col><h1><i class="fas fa-mail-bulk"></i></h1></Col>
                        <Col>
                            <h6>🅔🅜🅐🅘🅛</h6>
                            <p>xtraauthority@gmail.com </p>
                        </Col>
                    </Row>
                   </Col>
              </Row>
          </Container>
    </div>
    <div className="container pt-3 contai">
            <h1 style={{textAlign:'center'}}>🅢🅗🅐🅡🅔 🅨🅞🅤🅡 🅐🅓🅓🅡🅔🅢🅢</h1>
  <form className='opinion' action="action_page.php">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your first name"/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name"/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia"> Bangladesh</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
      <option value="usa">Australia</option>
      <option value="usa">India</option>
      <option value="usa">China</option>
    </select>

    <label for="subject">Opinion</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

    <Link to='*'><input type="submit"  value="Submit"/></Link>

  </form>
  </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;