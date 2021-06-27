import React from "react";
import Image from "next/image";

const InfoCard = ({ title, image }) => {
  return (
    <div className="py-5 px-3 w-[286px] flex flex-col space-y-2 justify-center items-center bg-white shadow-md rounded-tr-lg rounded-bl-lg hover:shadow-primary transition-all ease-in-out duration-300 transform hover:-translate-y-2">
      <div className="w-[44px] h-[44px] rounded-full flex justify-center items-center bg-[#F9F1D4] px-2">
        <Image src={image} alt="" />
      </div>
      <p className="font-primary font-medium text-base text-gray-900 capitalize">
        {title}
      </p>
    </div>
  );
};

export default InfoCard;
