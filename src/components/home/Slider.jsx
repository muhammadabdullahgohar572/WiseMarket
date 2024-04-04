import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../../assets/images/slider/slider1.png";
import slider2 from "../../assets/images/slider/slider2.jpeg";

const SimpleSlider = () => {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  });



  return (
    <div className="w-[95%] sm:m-[2%]  overflow-hidden">
      <Slider {...settings}>
        <div>
          <img src={slider1} alt="SliderOneImage" className="h-80 object-cover" />
        </div>
        <div>
          <img src={slider2} alt="SliderTwoImage" className="h-80 object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
