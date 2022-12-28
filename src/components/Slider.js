import React from "react";
import Slider from "infinite-react-carousel";

import img1 from './images/bg1.jpg';
import img2 from './images/bg2.jpg';
import img3 from './images/bg3.jpg';
import img4 from './images/bg4.jpg';
import img5 from './images/bg5.jpg';
// import "./css/slide.css";
import './slider.css'

function ImgSlider() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    className: "slide_box",
    dots: false,
    virtualList: true,
    duration: 20,
    
    arrows:false,
    
  };
  return (
    <div className="carousel-container">
      
      <Slider {...settings}>
        <div className="row">
          <img
            src={img1}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div className="row">
          <img
            src={img2}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div className="row">
          <img
            src={img3}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div className="row">
          <img
            src={img4}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
        <div className="row">
          <img
            src={img5}
            className="slide_img col-lg-12"
            alt="Responsive img"
          />
          
        </div>
      </Slider>
    </div>
  );
}

export default ImgSlider;
