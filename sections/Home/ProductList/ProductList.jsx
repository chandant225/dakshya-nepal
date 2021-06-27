import React from "react";
import { ProductNav } from "../../../components";

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
    <div className="bg-[#FEF6E0]">
      <div className="flex justify-center items-center flex-col mt-20 pt-10 container mx-auto">
        <ProductNav items={dummy} />
      </div>
    </div>
  );
};

export default ProductList;
