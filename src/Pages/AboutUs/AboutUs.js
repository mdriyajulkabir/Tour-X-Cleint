import React from 'react';
import './About.css';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import { Card, Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
            
            <Container className='about' style={{padding:'20px'}}>
  <Row>
    <Col>
    <h1 style={{ fontWeight:'bold'}}><span style={{fontWeight:'900',color:'orange'}}> <i>A</i> </span>bout </h1>
    <p>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip. <br /> Printer took a galley of type and scrambled it to make a type speci menu book. It has survived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanget was popularised.</p>
    <Container>
      <Row>
        <Col >
        <h3>𝒜𝓃𝒹𝓇𝑒𝓌 𝑀𝒸𝒟𝑜𝓃𝒶𝓁𝒹</h3>
        <hr />
        <h6 className='text-center'>Founder</h6>
       
        </Col>
        
      </Row>
    </Container>
    </Col>
    <Col className=''>
    <img style={{}} src="http://html.cwsthemes.com/suntour/pic/promo-2.png" alt="" />
    </Col>
  </Row>
</Container>
<Container className='pt-5'>
  <Row>
    <Col sm={8}>
      <img src="https://image.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-coconut-palm-tree-sunrise-time_74190-7454.jpg" alt="" />
    </Col>
    <Col sm={4}>
      <h1 className='pt-5'><span style={{fontWeight:'bold',color:'orange'}}>O</span>ur Story</h1>
      <p>The narrator isn't describing a static place but a world in motion. Or the image compels your eyes to move all over, rendering the story through the interplay of subject and background. And this movement isn't limited to physical movement, but a sense of temporality, or time itself moving. <br /><small><i>_our-team-members</i></small></p>
    </Col>
  </Row>
</Container>
       <Container className="p-4 text-center">
           <h1 className="fw-bold" color='#444'>Our Team</h1>
           <p><hr /><img width='7%' src="https://cdn-icons-png.flaticon.com/512/432/432492.png" alt="" /><hr /></p>
           <Row>
               <Col>
               <Card className='other-card' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="http://html.cwsthemes.com/suntour/pic/testimonial/author/1@2x.jpg" />
  <Card.Body className='other-card1'>
    <Card.Title className='text-center'> <h3 >Nicole Beck</h3> <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p> </Card.Title>
    <Card.Text>
      Fusce auctor vitae neque sed aliquam. Etiam augue nisl, tincidunt ut vestibulum ut, bibendum nec leo. Mauris facilisis magna efficitur tristique tempor. Sed a diam vitae nulla sagittis egestas. <hr />
      <p><small><i class="fas fa-phone-square-alt"></i> +011 36418 3263</small></p>
      <p><small> <i class="far fa-envelope"></i> xtravel@gmail.com</small></p>
      
    </Card.Text>
  </Card.Body>
</Card>
               </Col>
               <Col>
               <Card className='other-card' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="http://html.cwsthemes.com/suntour/pic/testimonial/author/2@2x.jpg" />
  <Card.Body className='other-card1'>
    <Card.Title className='text-center'> <h3>Peter Robertson</h3>
    <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p></Card.Title>
    <Card.Text>
      Fusce auctor vitae neque sed aliquam. Etiam augue nisl, tincidunt ut vestibulum ut, bibendum nec leo. Mauris facilisis magna efficitur tristique tempor. Sed a diam vitae nulla sagittis egestas.<hr />
      <p><small><i class="fas fa-phone-square-alt"></i> +011 36418 3263</small></p>
      <p><small> <i class="far fa-envelope"></i> xtravel@gmail.com</small></p>
    </Card.Text>
  </Card.Body>
</Card>
               </Col>
               <Col>
               <Card className='other-card' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="http://html.cwsthemes.com/suntour/pic/testimonial/author/3@2x.jpg" />
  <Card.Body className='other-card1'>
    <Card.Title className='text-center'> <h3>Kathy Harrison</h3>
    <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></p></Card.Title>
    <Card.Text>
      Fusce auctor vitae neque sed aliquam. Etiam augue nisl, tincidunt ut vestibulum ut, bibendum nec leo. Mauris facilisis magna efficitur tristique tempor. Sed a diam vitae nulla sagittis egestas.<hr />
      <p><small><i class="fas fa-phone-square-alt"></i> +011 36418 3263</small></p>
      <p><small> <i class="far fa-envelope"></i> xtravel@gmail.com</small></p>
    </Card.Text>
  </Card.Body>
</Card>
               </Col>
           </Row>
       </Container>

            <Footer></Footer>
        </div>
    );
};

export default AboutUs;