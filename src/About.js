import React, { Component, useEffect, useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
// import HeroList from './HeroList';
// import NewsList from './NewsList';




const publickey = process.env.REACT_APP_MARVEL_API_KEY;
//    console.log(publickey);

const hash = '8d14e7bce8c239d96aad15754ec7174d';

const url = `https://gateway.marvel.com/v1/public/characters/1009220?ts=1&apikey=${publickey}&hash=${hash}`;

const ids = ['1009220', '1009368', '1009664' , '1009610', '1009351', '1009297'];







class About extends Component {

  render() {



// console.log('render method called : HeroList');

    // const {data, isLoaded} = this.state;


    return (


  <Container fluid>
  <Row>
  <Col className="leftSide">

  <h3>The</h3><h4>Mission</h4>

  <p class="aboutUsText">The mission always was, and always will be the Earth, and all of humanity that calls it home.</p>
  <p class="aboutUsText">Our team of superheros travels across the planet to fight off threats to all of our existence. More recently, our team has expanded to protect us from the likes of extraterrestrial threats as well.</p>





  </Col>
  <Col className="rightSide">

   <h3>The</h3><h4>Team</h4>
   <p></p>
  

{/*<p>{hero1}</p>*/}



{/*
<div>
        {!isLoaded ? <div>Loading...</div> :
        <ul>
          {data.map((item)=>{
            <li>{item.name}</li>
          })}
        </ul>
        }

      </div>*/}





</Col>

  </Row>
  </Container>

    );
  }
}

export default About;
