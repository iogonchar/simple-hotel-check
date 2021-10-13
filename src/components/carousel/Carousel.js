import React from 'react';
import Slider from 'react-slick';

import '../../../node_modules/slick-carousel/slick/slick.css'; 
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import './Carousel.css';

import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';
import slide4 from '../../images/slide4.jpg';
import slide5 from '../../images/slide5.jpg';

const Carousel = () => {
  const carouselImages = [slide2, slide3, slide4, slide5];

  const settings = {
    infinite: true,
    slidesToShow: 3.5,
    swipeToSlide: true,
    initialSlide: 1.5,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {
          carouselImages.map((item) => (
            <div key={item} className="carousel__item">
              <img className="carousel__img" src={item} alt="slide" />
            </div>
          ))
        }
        <div className="carousel__item">
          <img className="carousel__img" src={slide1} alt="slide" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;