import React from "react";
import Slider from "react-slick";

const TextSlider = ({ TextList }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    centerMode: false,
    slidesToShow: 1,
    centerPadding: "38px",
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    vertical: true,
    adaptiveHeight: true,
    variableWidth: false,
    verticalSwiping: true,
    className: "text-slide",
  };
  return (
    <Slider {...settings}>
      {TextList.map((data, index) => (
        <h2 key={index} className="text-red-500">
          {data}
        </h2>
      ))}
    </Slider>
  );
};

export default TextSlider;
