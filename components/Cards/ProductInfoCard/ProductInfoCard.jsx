import React from "react";
import {
  AcademicCapIcon,
  PencilIcon,
  TemplateIcon,
} from "@heroicons/react/solid";
import { list } from "postcss";
import Aos from "aos";
import { useEffect } from "react";

const ProductInfoCard = ({
  sub_heading,
  heading,
  description,
  list,
  order,
  color_code,
  illustration,
  antxt,
  animg,
}) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="block lg:grid lg:grid-cols-2 gap-8">
      <div
        // data-aos-duration="200"
        // data-aos-offset="0"
        // data-aos={animg}
        className={`${
          order === 0 ? "order-0" : "order-1"
        } place-self-center mt-16`}
      >
        <img src={illustration} alt="" className="w-[32rem] h-auto" />
      </div>
      <div className="flex flex-col product__infoCard pt-10 md:pt-0 items-center md:items-start">
        <div className="relative">
          <div
            data-aos-duration="400"
            data-aos-offset="5"
            data-aos="tilt-ball"
            className={`flex items-center shadow-lg justify-center w-20 h-20 rounded-tr-full rounded-tl-full relative ${
              order === 0 ? `rounded-br-full` : `rounded-br-full`
            } ${
              order === 1 ? `rounded-bl-full` : `rounded-full`
            } bg-gradient-to-tr from-yellow-400 to-yellow-500`}
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
          {sub_heading.toLowerCase().includes("qbex") && (
            <AcademicCapIcon className="w-8 top-6 left-6 absolute h-8 text-white" />
          )}
          {sub_heading.toLowerCase().includes("dolphin") && (
            <PencilIcon className="w-8 h-8 top-6 left-6 absolute text-white" />
          )}
          {sub_heading.toLowerCase().includes("cms") && (
            <TemplateIcon className="w-8 h-8 top-6 left-6 absolute text-white" />
          )}
        </div>

        <div 
        // data-aos-duration="200" data-aos-offset="5" data-aos={antxt}
        >
          <p
            className={`text-lg font-primary font-medium text-${color_code}-500 mt-3`}
          >
            {sub_heading}
          </p>
          <p className="text-[32px] font-primary font-semibold text-gray-800 mt-4 w-full lg:w-[30rem]">
            {heading}
          </p>
          <p className="font-primary text-gray-500 text-lg mt-4 tracking-wider">
            {description}
          </p>
          <ul className="font-primary text-lg text-gray-500 mt-4 space-y-2 list-outside">
            {list && list.map((list) => <li>{list.name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoCard;
