import React from "react";

import Image from "next/image";

const TestimonialCard = ({ image, description, name }) => {
  return (
    <div className="my-10 mx-5 py-[26px] px-10 w-[536px] space-y-2 flex flex-col items-center justify-center bg-white rounded-tr-lg rounded-bl-lg shadow-lg hover:shadow-primary transition-all ease-in-out duration-300 transform hover:-translate-y-2">
      <Image
        src={image}
        width="96px"
        height="96px"
        className="rounded-full object-cover"
      />
      <p className="font-primary text-base font-medium text-center">
        <q>{description}</q>
      </p>
      <p className="font-primary text-base font-bold text-yellow-500">{name}</p>
    </div>
  );
};

export default TestimonialCard;
