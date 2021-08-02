import React, { useState, useEffect } from "react";
import { ProductNav, PrimaryButton } from "..";
import { dummy } from "../../sections/Home/ProductList/dummy";
import AOS from "aos";

const FormDetails = () => {
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
    <div className="p-4">
      <div className=" flex items-center justify-center">
        <img
          src="./images/pen_book 1.svg"
          alt="ruko jara sabar karo"
          className="h-64"
        />
      </div>
      <div className="">
        <div className="flex justify-center items-center flex-col">
          <ProductNav
            items={dummy}
            activekey={activekey}
            setActiveKey={setActiveKey}
          />
          <div
            className="pt-4 flex flex-col md:flex-row w-full mt-6"
            style={{}}
          >
            {activeProduct.map((d, index) => (
              <>
                <div
                  data-aos-delay="50"
                  data-aos-duration="500"
                  data-aos="zoom-in"
                  className="space-y-3 w-full"
                >
                  <p className="text-[32px] font-primary font-semibold text-gray-900">
                    {d.heading}
                  </p>
                  <p className="text-base max-h-[96px] font-primary text-gray-600 mt-10">
                    {d.description}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDetails;
