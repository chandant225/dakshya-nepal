import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import modern_school from "../../../public/icons/schools/modern_indian.png";
import islington from "../../../public/icons/schools/islington.png";
import dav from "../../../public/icons/schools/dav.png";

const Clients = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    draggable: true,
    infinite: true,
  };
  return (
    <div className="container mx-auto mt-24">
      <p className="text-center font-primary text-[32px] font-medium capitalize text-gray-900">
        Our Happy Customers
      </p>
      <div className="pt-10">
        <Slider {...settings}>
          <Image src={modern_school} alt="" />
          <Image src={dav} alt="" />
          <Image src={islington} alt="" />
          <Image src={modern_school} alt="" />
          <Image src={dav} alt="" />
          <Image src={islington} alt="" />
          <Image src={modern_school} alt="" />
          <Image src={dav} alt="" />
          <Image src={islington} alt="" />
          <Image src={modern_school} alt="" />
          <Image src={dav} alt="" />
          <Image src={islington} alt="" />
          <Image src={modern_school} alt="" />
          <Image src={dav} alt="" />
          <Image src={islington} alt="" />
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
