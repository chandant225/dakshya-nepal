import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProductNav, PrimaryButton } from "../../../components";
import { dummy } from "./dummy";
import AOS from "aos";

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
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="bg-[#FEF6E0] bg-opacity-30 relative hidden md:block">
      <img
        className="star z-30 ml-0 w-[12%] absolute top-12"
        src="/animation_svg/Star.svg"
        alt="star.svg"
      />
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
              <div
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos="new-animation"
                className=" flex justify-center  items-center w-40"
              >
                <img src={d.image} alt="" className="dolphin z-50" />
              </div>
              <div
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos="zoom-in"
                className="space-y-3 w-full lg:w-[564px]"
              >
                <p className="text-base font-primary text-blue-600 font-semibold">
                  {d.name}
                </p>
                <p className="text-[32px] font-primary font-semibold text-gray-900">
                  {d.heading}
                </p>
                <p className="text-base font-primary text-gray-600">
                  {d.description}
                </p>
                <div
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos="flip-down"
                  data-aos-offset="80"
                >
                  <PrimaryButton text="Learn More" link="/" />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <img
        style={{ zIndex: "-1" }}
        className="absolute h-[25rem] top-12 -ml-20"
        src="/illustrations/Ellipse 60.svg"
        alt="ellipse.svg"
      />
      <div className="string"></div>
    </div>
  );
};

export default ProductList;
