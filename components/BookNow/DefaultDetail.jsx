import React from "react";
import {dummy} from './dummy';

const DefaultDetail = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-200 to-primary px-12 py-12">
      <div className="grid grid-cols-2">
        <div className="pb-12">
          <p className="font-primary font-bold text-4xl">
            Dakshya <br /> Nepal
          </p>
          <p className="w-[195px] text-lg font-primary font-light pt-5">
            We focus on digitizing the education system of the country to make
            it more productive and effective.
          </p>
        </div>
        <img
          src="/images/digital-content.png"
          className="place-self-center"
          alt=""
        />
      </div>
      <p className="font-primary text-2xl font-medium text-center">
        Get to know some of our products
      </p>
      <div className="grid grid-cols-2 pt-8 justify-center items-center gap-2">
        {/* actual card */}
        {
          dummy.filter(d => d.id !== 0).map((data, index) => (
            <div className="flex flex-col space-y-2 items-center justify-center" key={index}>
          <img
            src={data.image}
            alt="image"
            className="max-h-[148px] max-w-[148px]"
          />
          <p className="text-blue-600 text-center capitalize font-medium text-sm font-primary ">
            {data.name}
          </p>
        </div>
          ))
        }
      </div>
    </div>
  );
};

export default DefaultDetail;
