import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";
import { CareerCard } from "../../../components";

import carrers_img from "../../../public/illustrator/careers.png";
import Aos from "aos";
import { useEffect } from "react";

const CareerBox = () => {
  const links = [
    {
      name: "Explore Careers",
      link: "/careers",
      active: true,
    },
    {
      name: "Join As Consultant",
      link: "/careers",
    },
  ];
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container mx-auto mt-24 flex flex-col items-center justify-center">
      <div className="relative">
        <div
          data-aos-duration="500"
          data-aos="tilt-ball"
          className="relative flex items-center shadow-lg justify-center w-20 h-20 rounded-full rounded-bl-full bg-gradient-to-tr from-pink-500 to-red-500"
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
        <BriefcaseIcon className="w-8 h-8 absolute top-6 left-6 text-white" />
      </div>
      <p className="font-primary text-lg font-medium pt-5 text-gray-800">
        Career
      </p>
      <p
        data-aos-duration="500"
        data-aos="text"
        className="text-center font-primary text-[32px] font-medium capitalize text-gray-900"
      >
        Intrested In Educating Nepal?
      </p>
      <div data-aos-duration="500" data-aos="zoom-in-up" className="pt-10">
        <CareerCard
          description="If you are willing to digitize Nepal and become a part of the largest digital educator, join us in changing the education system for being recognized as the global leader in education."
          links={links}
          image={carrers_img}
        />
      </div>
    </div>
  );
};

export default CareerBox;
