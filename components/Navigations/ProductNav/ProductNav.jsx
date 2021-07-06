import React, { useState } from "react";
import Link from "next/link";

const ProductNav = ({ items, activekey, setActiveKey }) => {
  return (
    <div className="bg-[#EBEBEB] rounded-full py-3 px-2 flex items-center justify-evenly w-full lg:w-[564px] bg-opacity-[59%]">
      {items.map((item, index) => (
        <div
          className={`font-primary cursor-pointer text-base text-gray-900 capitalize hover:bg-blue-500 rounded-full py-2 px-5 hover:text-white transition-all ease-in-out duration-300 ${
            activekey === item.id && `bg-blue-500 text-white`
          }`}
          onClick={() => setActiveKey(item.id)}
        >
          <p
            key={index}
            className={`${
              activekey === item.id && `text-white`
            } cursor-pointer`}
          >
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductNav;
