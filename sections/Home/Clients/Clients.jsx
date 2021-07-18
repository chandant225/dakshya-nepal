import React from "react";
import Slider from "react-slick";
import { ShieldCheckIcon } from "@heroicons/react/solid";
import dav from "../../../public/icons/schools/dav.png";
import aos from "aos";
import { useEffect } from "react";

const Clients = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    draggable: true,
    infinite: true,
  };
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <div className="mt-10 flex flex-col">
      <div
        data-aos-duration="2000"
        data-aos="tilt-ball"
        className="relative self-center flex items-center shadow-lg justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-300-300 to-yellow-500"
        style={{
          backgroundImage:
            "linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%)",
        }}
      >
        <div
          className="absolute w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full -top-4 -right-4"
          style={{
            backgroundImage:
              "linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%)",
          }}
        />
        <ShieldCheckIcon className="w-8 h-8 text-white" />
      </div>
      <p className="text-center font-primary text-gray-800 text-lg font-medium pt-5">
        Clientele
      </p>
      <p
        data-aos-duration="2000"
        data-aos="text"
        className="text-center font-primary text-[32px] font-medium capitalize text-gray-900"
      >
        Who trust us
      </p>
      <div className="pt-10">
        <Slider {...settings} className="flex">
          <img src="/icons/schools/asb.png" alt="" className="" />
          <img src="/icons/schools/bds.png" alt="" />
          <img src="/icons/schools/ceb.png" alt="" />
          <img src="/icons/schools/gss.png" alt="" />
          <img src="/icons/schools/asb.png" alt="" />
          <img src="/icons/schools/npsc.png" alt="" />
          <img src="/icons/schools/npsk.png" alt="" />
          <img src="/icons/schools/npss.png" alt="" />
          <img src="/icons/schools/SEBS.png" alt="" />
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
