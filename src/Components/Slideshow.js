import React from 'react';
import { Slide } from 'react-slideshow-image';
import man from '../assets/building-2.jpg'
import handshake from '../assets/handshake.jpg';
import camara from '../assets/Camara_lens.jpg';


const slideImages = [
    handshake,
    man, 
   camara

  ];
   
  const properties = {
    duration: 11116000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }
   
  const Slideshow = () => {
      return (
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <div className="slide__container-header">
                  <h1>Trusted Process Servers </h1>
                  <h4>Serving all of Illinois and Headquarted in Chicago, IL </h4>
                  <button className="homepage__btn btn-left">Send Us A Job</button>
                  <button className="homepage__btn">Learn More About Process Serving</button>
                  
                </div>

                
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                
              </div>
            </div>
          </Slide>
        </div>
      )
  }


export default Slideshow; 