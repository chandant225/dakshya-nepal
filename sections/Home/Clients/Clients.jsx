import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ShieldCheckIcon } from "@heroicons/react/solid";

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
    <div className="mt-24 flex flex-col">
      <div className="self-center flex items-center shadow-lg justify-center w-20 h-20 rounded-tr-full rounded-tl-full rounded-br-full rounded-bl-3xl bg-gradient-to-tr from-green-300 to-green-500">
        <ShieldCheckIcon className="w-8 h-8 text-white" />
      </div>
      <p className="text-center font-primary text-green-500 text-lg font-medium pt-5">
        Clientele
      </p>
      <p className="text-center font-primary text-[32px] font-medium capitalize text-gray-900">
        Who trust us
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
