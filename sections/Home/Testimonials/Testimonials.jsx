import React from "react";
import { TestimonialCard } from "../../../components";
import Slider from "react-slick";
import { UserGroupIcon } from "@heroicons/react/solid";
import Image from "next/image";
import aos from "aos";
import { useEffect } from "react";

const Testimonials = () => {
  const settings = {
    vertical: true,
    infinite: true,
    speed: 200,
    verticalSwiping: true,
    // autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
  };
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <div className="container mx-auto mt-24 flex flex-col justify-center items-center">
      <div className="relative">
        <div
          data-aos-duration="500"
          data-aos="tilt-ball"
          className="relative flex items-center shadow-lg justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-500"
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
        </div>
        <UserGroupIcon className="w-8 h-8 absolute top-6 left-6 text-white" />
      </div>
      <p className="text-lg font-semibold text-center mt-5 text-gray-700">
        Testimonial
      </p>
      <p
        data-aos-duration="1000"
        data-aos="text"
        className="text-center font-primary text-[32px] font-medium capitalize text-gray-900"
      >
        Our Happy Customers
      </p>
      <div data-aos-duration="500" data-aos="slide-up" className="">
        <div className="absolute left-0 hidden lg:block">
          <img src="/illustrator/school_images.png" alt="" />
        </div>
        <Slider {...settings} className="py-3 px-0 md:px-3 relative">
          <TestimonialCard
            name="Prabin Shrestha"
            description="“The Qbex team exhibited professionalism throughout the software package development and implementation period. They communicated regularly and understood our requirements exceptionally well."
            image="https://qbex.com.np/wp-content/uploads/2020/07/Chanakya-Mgmt@3x-120x120.png"
          />
          <TestimonialCard
            name="Sundar Budathoki"
            description="The Software makes the overall performance of the school run smoothly especially dealing with the finance related transactions with the help of regular support staff. "
            image="https://qbex.com.np/wp-content/uploads/2020/07/nepal-police-Mgmt@3x-120x120.png"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
