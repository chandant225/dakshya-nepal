import React from "react";
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
    <div className="container mx-auto mt-24">
      <p className="pt-10 text-center font-primary text-[32px] font-medium capitalize text-gray-900">
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
