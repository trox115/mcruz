import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Destaques from './Destaques';
import Banner from './Banner';

function HomePage() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="aixam.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Tens 16 anos?</h3>
            <p>Já podes conduzir.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="ultimatecell.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <Destaques />
      <Banner />
    </>
  );
}

export default HomePage;
