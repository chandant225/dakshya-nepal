import React from "react";
import Image from "next/image";
import { ProductNav, PrimaryButton } from "../../../components";

import dolphin_pen from "../../../public/images/dolphin.png";

const dummy = [
  {
    name: "Talking Pen",
  },
  {
    name: "Digital Content",
  },
  {
    name: "Qbex Kid",
  },
  {
    name: "Qbex",
  },
  {
    name: "CMS",
  },
];
const ProductList = () => {
  return (
    <div className="bg-[#FEF6E0] bg-opacity-30 relative">
      <div className="flex justify-center items-center flex-col mt-20 pt-10 container mx-auto">
        <ProductNav items={dummy} />
        <div className="pt-10 flex w-full space-x-32" style={{}}>
          <div className="flex justify-center items-center w-40">
            <Image src={dolphin_pen} alt="" className="z-[2] " />
          </div>
          <div className="space-y-3 w-[564px]">
            <p className="text-base font-primary text-blue-600 font-semibold">
              Talking Pen
            </p>
            <p className="text-[32px] font-primary font-semibold text-gray-900">
              Making Learning more fun with Talking Pen
            </p>
            <p className="text-base font-primary text-gray-600">
              Dolphin Talking Pen is an interactive tool that matches words and
              images in our reading books. When readers use Dolphin Talking Pen,
              it touches the book then a preloaded audio file is activated and
              spoken by the speaker inside.
            </p>
            <PrimaryButton text="Learn More" link="/" />
          </div>
        </div>
        <svg
          width="306"
          height="497"
          viewBox="0 0 306 497"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-14 left-0 h-96"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M113.094 17.9691C180.453 41.2906 217.956 104.567 250.084 168.283C283.841 235.23 325.649 309.316 294.396 377.525C262.573 446.978 179.682 469.036 105.049 484.823C31.5215 500.376 -48.0634 507.943 -108.034 462.651C-170.11 415.769 -193.532 336.21 -194.867 258.317C-196.253 177.431 -178.982 91.537 -115.247 41.7949C-51.7166 -7.78737 37.0255 -8.36806 113.094 17.9691Z"
            fill="#FACD2E"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductList;
