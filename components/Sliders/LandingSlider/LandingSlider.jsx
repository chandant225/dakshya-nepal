// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // import Swiper core and required modules
// import SwiperCore, { EffectFade, Pagination } from "swiper/core";
// import { SliderCard } from "../../Cards";
// import { data } from "./dummy";

// // install Swiper modules
// SwiperCore.use([Pagination]);

// const LandingSlider = () => {
//   // return (
//   //   <Swiper
//   //     slidesPerView={1}
//   //     spaceBetween={30}
//   //     pagination={{
//   //       clickable: true,
//   //     }}
//   //     className="mySwiper"
//   //   >
//   //     {/* {data.map((d, index) => (
//   //       <SwiperSlide>
//   //         <SliderCard
//   //           title={d.name}
//   //           description={d.description}
//   //           image={d.images}
//   //           key={index}
//   //         />
//   //       </SwiperSlide>
//   //     ))} */}
//   //     <SwiperSlide>
//   //       <SliderCard
//   //         title={data[0].name}
//   //         description={data[0].description}
//   //         image={data[0].images}
//   //       />
//   //     </SwiperSlide>
//   //     <SwiperSlide>
//   //       <SliderCard
//   //         title={data[0].name}
//   //         description={data[0].description}
//   //         image={data[0].images}
//   //       />
//   //     </SwiperSlide>
//   //     <SwiperSlide>
//   //       <SliderCard
//   //         title={data[0].name}
//   //         description={data[0].description}
//   //         image={data[0].images}
//   //       />
//   //     </SwiperSlide>
//   //   </Swiper>
//   // );
//   return (
//     <>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// };

// export default LandingSlider;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
