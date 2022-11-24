/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import Buy from '../buy/Buy';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home(){
        return (
            <span>
            <div id="elements">
            <Carousel id="carousel">
      <Carousel.Item>
        <img id="crouselImg"
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/486516.jpg"
          alt="Best Car Models"
        />
        <Carousel.Caption>
          <h3 className="carouselLine">Best Car Models</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="crouselImg"
          className="d-block w-100"
          src="https://www.babelquest.co.uk/hubfs/shutterstock_400222735.jpg"
          alt="Best Car Prices"
        />

        <Carousel.Caption>
          <h3 className="carouselLine">Best Car Prices</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="crouselImg"
          className="d-block w-100"
          src="https://wrench.com/blog/content/images/2019/07/new-car.jpg"
          alt="Shortest Waiting Time"
        />

        <Carousel.Caption>
          <h3 className="carouselLine">Shortest Waiting Time</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        <span class="container">
        <img id="background" alt="img" src="https://media.istockphoto.com/id/184660076/photo/open-garage-door.jpg?s=612x612&w=0&k=20&c=FYPIe-6TLaVRZ_u3o5J-X8Y21dNRQKAdwJ6CecqMfI8=">
        </img>
        <Link to="/Buy"><button class="centered">Buy Your New Car</button></Link>
        </span>
        </div>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://github.com/Amithaviv' className='me-4 text-reset'>
            <MDBIcon fab icon="public\facebook-app-symbol.png" />
          </a>
          <a href='https://github.com/Amithaviv' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://github.com/Amithaviv' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='https://github.com/Amithaviv' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://github.com/Amithaviv' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='https://github.com/Amithaviv' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="fas fa-car" className="me-3" />
                Car Store
              </h6>
              <p>
                Here you can Buy the Best car models with the Best prices
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Models</h6>
              <p>
                <a href='https://www.tesla.com/' className='text-reset'>
                  Tesla
                </a>
              </p>
              <p>
                <a href='https://www.polestar.com/en-il/' className='text-reset'>
                  Polestar
                </a>
              </p>
              <p>
                <a href='https://www.porsche.com/middle-east/' className='text-reset'>
                  Porsche
                </a>
              </p>
              <p>
                <a href='https://www.ferrari.com/en-IL' className='text-reset'>
                Ferrari
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright: 
        <a className='text-reset fw-bold'>
          Car Store
        </a>
      </div>
    </MDBFooter>
        </span>
        );
}
export default Home