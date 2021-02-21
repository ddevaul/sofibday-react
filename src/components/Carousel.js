import React from "react";
import Carousel from "react-bootstrap/Carousel";
export default class CarouselFilled extends React.Component {
  render() {
    return (<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="sofibday1.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Happy Birthday Sof!</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="sofibday2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    <h3>Here's to 20 years!</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="sofibday3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    <h3>We love you!</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>) 
  }
}