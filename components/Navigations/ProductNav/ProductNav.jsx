import React, { useState } from "react";
import Link from "next/link";

const ProductNav = ({ items }) => {
  const [active, setActive] = useState("");
  return (
    <div className="bg-[#EBEBEB] rounded-full py-3 px-2 flex items-center justify-evenly w-[564px]">
      {items.map((item, index) => (
        <div
          className={`font-primary text-base text-gray-900 capitalize hover:bg-blue-500 rounded-full py-2 px-5 hover:text-white transition-all ease-in-out duration-300 ${
            active && `bg-blue-500`
          }`}
        >
          <Link href="/" key={index}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductNav;
