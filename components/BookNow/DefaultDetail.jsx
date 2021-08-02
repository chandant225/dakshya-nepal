import React from "react";

const DefaultDetail = ({ activekey }) => {
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
      <p className="font-primary text-xl font-medium text-center">
        Get to know some of our products
      </p>
      <div className="flex pt-8 justify-center items-center flex-wrap space-x-6 space-y-4">
        {/* actual card */}
        <div className="flex flex-col space-y-2 items-center justify-center">
          <img
            src="/images/cms.svg"
            alt="image"
            className="max-h-[54px] max-w-[68px]"
          />
          <p className="text-blue-600 text-center capitalize font-medium text-sm font-primary">
            Digital Content
          </p>
          <p className="font-primary text-center font-light text-[11px] leading-[14px] max-w-[112px]">
            Making Learning more interactive with Digital Content
          </p>
        </div>
        {/* actual card */}
        <div className="flex flex-col space-y-2 items-center justify-center">
          <img
            src="/images/cms.svg"
            alt="image"
            className="max-h-[54px] max-w-[68px]"
          />
          <p className="text-blue-600 text-center capitalize font-medium text-sm font-primary">
            Digital Content
          </p>
          <p className="font-primary text-center font-light text-[11px] leading-[14px] max-w-[112px]">
            Making Learning more interactive with Digital Content
          </p>
        </div>
        {/* actual card */}
        <div className="flex flex-col space-y-2 items-center justify-center">
          <img
            src="/images/cms.svg"
            alt="image"
            className="max-h-[54px] max-w-[68px]"
          />
          <p className="text-blue-600 text-center capitalize font-medium text-sm font-primary">
            Digital Content
          </p>
          <p className="font-primary text-center font-light text-[11px] leading-[14px] max-w-[112px]">
            Making Learning more interactive with Digital Content
          </p>
        </div>
        {/* actual card */}
        <div className="flex flex-col space-y-2 items-center justify-center">
          <img
            src="/images/cms.svg"
            alt="image"
            className="max-h-[54px] max-w-[68px]"
          />
          <p className="text-blue-600 text-center capitalize font-medium text-sm font-primary">
            Digital Content
          </p>
          <p className="font-primary text-center font-light text-[11px] leading-[14px] max-w-[112px]">
            Making Learning more interactive with Digital Content
          </p>
        </div>
        {/* actual card */}
        <div className="flex flex-col space-y-2 items-center justify-center">
          <img
            src="/images/cms.svg"
            alt="image"
            className="max-h-[54px] max-w-[68px]"
          />
          <p className="text-blue-600 text-center capitalize font-medium text-sm font-primary">
            Digital Content
          </p>
          <p className="font-primary text-center font-light text-[11px] leading-[14px] max-w-[112px]">
            Making Learning more interactive with Digital Content
          </p>
        </div>
      </div>
    </div>
  );
};

export default DefaultDetail;
