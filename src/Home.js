import React, { Component } from "react";
import {Carousel} from 'react-bootstrap';
import {Animated} from 'react-animated-css';


class Home extends Component {
  render() {
    return (

      
      <Carousel>
  <Carousel.Item>
  <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
    <img
      className="d-block w-100 images"
      src="https://dummyimage.com/1440x720/000/fff&text=image+1"
      alt="First slide"/>
    <Carousel.Caption>
      <h3>What We Do</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Animated>
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100 images"
      src="https://dummyimage.com/1440x720/000/fff&text=image+2"
      alt="Second slide"/>
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100 images"
      src="https://dummyimage.com/1440x720/000/fff&text=image+3"
      alt="Third slide"/>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>





        

    );
  }
}
 
export default Home;

