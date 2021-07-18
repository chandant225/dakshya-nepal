import React, { useEffect } from "react";
import DropDown from "./DropDown";
import DropDownSkeleton from "./DropDownSkeleton";
import aos from "aos";

const CareerDropdown = ({ data, loading }) => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <div className="mt-[90px] lg:mt-[58px] container mx-auto ">
      <p
        data-aos="fade-right"
        className="font-medium font-primary text-2xl md:text-3xl "
      >
        Open Careers @ Dakshya Nepal
      </p>
      <div className="pt-[40px]">
        {loading ? (
          <DropDownSkeleton />
        ) : (
          data.map((data, index) => (
            <DropDown keyy={index} info={data} key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default CareerDropdown;
