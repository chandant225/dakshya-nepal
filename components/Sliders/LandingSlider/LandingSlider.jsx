import React from "react";
import ss from "../../../public/images/ss.svg";
import { PrimaryCard } from "../../Cards";
import Slider from "react-slick";

const LandingSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    initialSlide: 1,
    centerPadding: "0px",
    variableWidth: true,
    dots: true,
    showNav: false,
    customPaging: function (i) {
      return (
        <a href="#blank">
          <div key={i} />
        </a>
      );
    },
  };

  return (
    <div className="w-full mt-16 md:mt-0">
      <Slider {...settings}>
        <div>
          <PrimaryCard
            link="/something"
            name="Dolphin Talking Pen"
            image={ss}
          />
        </div>
        <div>
          <PrimaryCard
            link="/something"
            name="Dolphin Talking Pen"
            image={ss}
          />
        </div>
        <div>
          <PrimaryCard
            link="/something"
            name="Dolphin Talking Pen"
            image={ss}
          />
        </div>
        <div>
          <PrimaryCard
            link="/something"
            name="Dolphin Talking Pen"
            image={ss}
          />
        </div>
      </Slider>
    </div>
  );
};

export default LandingSlider;
