import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";
import { CareerCard } from "../../../components";

import carrers_img from "../../../public/illustrator/careers.png";

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
    {
      name: "Join As Online Tutor",
      link: "/careers",
    },
  ];
  return (
    <div className="container mx-auto mt-24 flex flex-col items-center justify-center">
      <div className="flex items-center shadow-lg justify-center w-20 h-20 rounded-tr-full rounded-tl-full rounded-br-3xl rounded-bl-full bg-gradient-to-tr from-pink-500 to-red-500">
        <BriefcaseIcon className="w-8 h-8 text-white" />
      </div>
      <p className="font-primary text-lg font-medium pt-5 text-red-500">
        Career
      </p>
      <p className="text-center font-primary text-[32px] font-medium capitalize text-gray-900">
        Intrested In Educating Nepal?
      </p>
      <div className="pt-10">
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
