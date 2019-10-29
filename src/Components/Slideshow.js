import React from 'react';
import { Slide } from 'react-slideshow-image';
import court from '../assets/court.jpg'
import handshake from '../assets/handshake.jpg';
import camara from '../assets/Camara_lens.jpg';


const slideImages = [
    handshake,
    court, 
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
                  
                </div>

                
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <div className="slide__container-header-1">
                  <h1>Document Retrieval  </h1>
                  <h4>If you need a copy of a court file give us a call </h4>
                  
                  <button className="homepage__btn btn-left">Send Us A Job</button>             
                  
                </div>
                
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <div className="slide__container-header-2">
                  <h1>Investigations </h1>
                  <h4>give us a call for a free case evaluation </h4>
                  <button className="homepage__btn btn-left">Send Us A Job</button>             
                  
                </div>
                
              </div>
            </div>
          </Slide>
        </div>
      )
  }


export default Slideshow; 