import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper/core";
import { SliderCard } from "../../Cards";
import { data } from "./dummy";

// install Swiper modules
SwiperCore.use([Pagination, EffectFade, Autoplay]);

const LandingSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      // effect={"fade"}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      className=""
    >
      {data.map((d, index) => (
        <SwiperSlide>
          <SliderCard
            title={d.name}
            description={d.description}
            image={d.images}
            key={index}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LandingSlider;
