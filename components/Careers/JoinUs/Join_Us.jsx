import React, { useState, useEffect } from "react";
import ApplyConsultant from "./ApplyConsultant";
import aos from "aos";

const Join_Us = ({ data }) => {
  const [apply, setApply] = useState(false);

  useEffect(() => {
    aos.init();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 border-solid border-gray-200 border-2 rounded-lg justify-center">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="bg-yellow-50 col-span-1 flex flex-col items-center overflow-hidden md:items-start sm:w-full md:w-full lg:w-full pt-[24px]  "
        >
          <img
            src={data.image}
            alt=""
            className="w-[280px] xl:pl-14 transition-all hover:transform hover:scale-[1.1] duration-1000"
          />
        </div>
        <div className="bg-gray-50 col-span-2 self-center h-full flex flex-col justify-center">
          <div data-aos="fade-left" className="p-[24px]  pt-[24px]">
            <p className="text-2xl xl:text-3xl font-primary font-medium capitalize pt-[1`px]">
              {data.title}
            </p>
            <p className="text-sm  font-primary text-gray-500 pt-[6px] md:mt-[9px] ">
              {data.desc}
            </p>
            <button
              label="Apply"
              onClick={() => setApply(true)}
              className="border-solid border-[3px] font-primary border-black bg-white hover:bg-black text-black hover:text-white font-bold py-1.5 md:py-2 px-auto rounded-md mt-[6px] md:mt-[9px] w-[80px] transition-all ease-linear duration-300 "
            >
              Apply
            </button>
            {apply && <ApplyConsultant setApply={setApply} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Join_Us;
