import React from "react";
import ss from "../../../public/images/ss.svg";
import { PrimaryCard } from "../../Cards";
import Slider from "react-slick";

const LandingSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object

    // customPaging: function (i) {
    //   return (
    //     <a href="#blank">
    //       <div key={i} />
    //     </a>
    //   );
    // },
  };

  return (
    <div className="w-full mt-16 md:mt-0 relative">
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
