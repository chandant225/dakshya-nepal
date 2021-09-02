import React from "react";
import Image from "next/image";

const InfoCard = ({ title, pic }) => {
  console.log(pic);
  return (
    <div className="py-5 px-3 w-[286px] flex flex-col space-y-2 justify-center items-center bg-white shadow-md rounded-tr-2xl rounded-bl-2xl hover:shadow-primary transition-all ease-in-out duration-300 transform hover:-translate-y-2">
      <div
        className=" flex items-center shadow-lg justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-500"
        style={{
          backgroundImage:
            "linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%)",
        }}
      >
        <img src={pic} alt="" className="h-8  w-8 cover" />
      </div>
      <p className="font-primary font-medium text-base text-gray-900 capitalize">
        {title}
      </p>
    </div>
  );
};

export default InfoCard;
