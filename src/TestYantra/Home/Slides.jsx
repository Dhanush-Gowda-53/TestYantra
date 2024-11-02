import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from "./asset 18.png"
import image2 from "./asset 19.png"
import image3 from "./asset 20.png"
import Style from "./Slides.module.css"
const Slides = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
      };
      return (
        <Slider {...settings} className={Style.sliding}>
          <div ><img src={image1} alt="" className={Style.image}/></div>
          <div ><img src={image3} alt="" className={Style.image}/></div>
          <div ><img src={image2} alt="" className={Style.image}/></div>
        </Slider>
      );
}

export default Slides
