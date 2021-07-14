import React from "react";
import Image from "next/image";

const FeatureCard = ({ title, image, description }) => {
  return (
    <div
      className="px-4 py-4 space-y-2 flex justify-center hover:transition-all duration-400 bg-gradient-to-l
    hover:from-yellow-300 hover:to-yellow-100 items-center flex-col lg:w-[300px] w-full  rounded-tr-2xl rounded-bl-2xl shadow-lg hover:shadow-primary transition-all ease-in-out duration-300 transform hover:-translate-y-2"
    >
      <Image src={image} alt="" />
      <p className="font-primary font-bold text-base capitalize text-gray-900">
        {title}
      </p>
      <p className="text-center font-primary font-normal text-base text-[#828282]">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
