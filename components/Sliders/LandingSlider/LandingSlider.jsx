import React from "react";
import ss from "../../../public/images/ss.svg";
import { PrimaryCard } from "../../Cards";
import Slider from "react-slick";

const LandingSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    initialSlide: 1,
    centerPadding: "0px",
    variableWidth: true,
    dots: true,
    showNav: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],

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
      <div
        className="absolute left-0 bottom-0 z-20 h-full w-[190px] hidden md:block"
        style={{
          background:
            "linear-gradient(90.08deg, #FFFFFF 1.37%, rgba(255, 252, 245, 0) 53.18%)",
        }}
      ></div>
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
      <div
        className="absolute right-0 bottom-0 z-20 h-full w-[78px] bg-blend-overlay hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(250, 205, 46, 0.24) 0%, #FACD2E 90.42%)",
        }}
      ></div>
    </div>
  );
};

export default LandingSlider;
