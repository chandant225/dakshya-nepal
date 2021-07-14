import React, { useEffect, useState } from "react";
import { ProductNav, PrimaryButton } from "../../../components";
import { dummy } from "./dummy";

const ProductList = () => {
  const [activekey, setActiveKey] = useState(1);
  const [activeProduct, setActiveProduct] = useState(
    dummy.filter((d) => d.id === activekey).map((filterData) => filterData)
  );
  useEffect(() => {
    const currActiveProduct = dummy
      .filter((d) => d.id === activekey)
      .map((filteredData) => filteredData);
    return () => {
      setActiveProduct(currActiveProduct);
    };
  }, [activekey, activeProduct]);

  return (
    <div className="bg-[#FEF6E0] bg-opacity-30 relative hidden md:block">
      <div className="flex justify-center items-center flex-col mt-20 py-10 container mx-auto">
        <ProductNav
          items={dummy}
          activekey={activekey}
          setActiveKey={setActiveKey}
        />
        <div
          className="pt-10 flex flex-col md:flex-row w-full lg:space-x-32"
          style={{}}
        >
          {activeProduct.map((d, index) => (
            <>
              <div className="flex justify-center items-center w-40">
                <img src={d.image} alt="" className="dolphin z-[2]" />
              </div>
              <div className="space-y-3 w-full lg:w-[564px]">
                <p className="text-base font-primary text-blue-600 font-semibold">
                  {d.name}
                </p>
                <p className="text-[32px] font-primary font-semibold text-gray-900">
                  {d.heading}
                </p>
                <p className="text-base font-primary text-gray-600">
                  {d.description}
                </p>
                <PrimaryButton text="Learn More" link="/" />
              </div>
            </>
          ))}
        </div>
        <svg
          width="306"
          height="497"
          viewBox="0 0 306 497"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[110px] md:top-14 left-0 h-72 md:h-96 z-[1]"
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
