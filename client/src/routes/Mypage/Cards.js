import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import res11 from "../../assets/img/res/res11.png"
import res2 from "../../assets/img/res/res2.jpeg"
import res3 from "../../assets/img/res/res3.jpeg"
import res4 from "../../assets/img/res/res4.png"
import res5 from "../../assets/img/res/res5.jpeg"


function Cards() {
  return (
    <div className='cards'>
      <h1>PROFESSIONAL RESUME TEMPLATES!</h1>
      <h3>We specialize in designing creative professional and inspiring resume templates.</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={res11}
              text='A Modern & Minimalist Resume Template for Adobe InDesign'
              label='Free Download'
              path='/resume'
            />
            <CardItem
              src={res2}
              text='Simple Resume Template'
              label='Free Download'
              path='/resume'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={res3}
              onClick="alert('hi')"
              text='Interactive PDF Resume Template for Adobe InDesign'
              label='$10.00'
              path="/resume"
            />
            <CardItem
              src={res4}
              text='Professional Resume Template for PowerPoint and Google Slides'
              label='$10.00'
              path='/resume'
            />
            <CardItem
              src={res5}
              text='Contemporary Simple Resume Template'
              label='$8.00'
              path='/resume'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;