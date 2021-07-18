import React from "react";
import { data as benefits } from "./BenefitData";

const Benefit = ({ title, image, benefits }) => {
  return (
    <div className="flex flex-col">
      <img src={image} alt="icon" className="h-auto cover" />
      <p className="mt-3 font-primary mb-4 text-2xl text-gray-800 capitalize font-semibold">
        {title}
      </p>
      <div className="product__infoCard">
        <ul className="font-primary text-lg text-gray-500 mt-4 space-y-2 ">
          {benefits.map((list) => (
            <li>{list.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Benefit;
