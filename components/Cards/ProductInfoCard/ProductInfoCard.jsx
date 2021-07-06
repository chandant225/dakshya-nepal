import React from "react";
import { RssIcon } from "@heroicons/react/solid";
import { list } from "postcss";

const ProductInfoCard = ({
  sub_heading,
  heading,
  description,
  list,
  order,
  color_code,
}) => {
  return (
    <div className="grid grid-cols-2">
      <div className={`order-${order}`}>
        <h1>illustration here</h1>
      </div>
      <div className="flex flex-col product__infoCard">
        <div
          className={`flex items-center shadow-lg justify-center w-20 h-20 rounded-tr-full rounded-tl-full rounded-br-full rounded-bl-3xl bg-gradient-to-tr from-${color_code}-300 to-${color_code}-500`}
        >
          <RssIcon className="w-8 h-8 text-white" />
        </div>
        <p className="text-lg font-primary font-medium text-gray-800 mt-3">
          {sub_heading}
        </p>
        <p className="text-[32px] font-primary font-semibold text-gray-800 mt-4">
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
  );
};

export default ProductInfoCard;
