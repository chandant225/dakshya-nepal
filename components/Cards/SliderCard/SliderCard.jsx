import React from "react";

const SliderCard = ({ image, title, description }) => {
  console.log(image, "images");
  return (
    <div
      className="md:grid h-full md:h-[90vh] w-full"
      style={{ gridTemplateColumns: ".5fr 1fr .5fr" }}
    >
      <div className="hidden flex-col space-y-5 h-full items-center justify-center transform -translate-y-14 md:flex">
        <div className="w-32 h-32 bg-yellow-400 rounded-xl shadow-2xl flex justify-center items-center">
          {image.forth && (
            <img src={image.forth} alt="" className="w-36 h-auto px-2 py-2" />
          )}
        </div>
        <div className="w-24 h-24 bg-white shadow-2xl rounded-xl flex justify-center items-center">
          {image.fifth && (
            <img src={image.fifth} alt="" className="w-36 h-auto px-2 py-2" />
          )}
        </div>
      </div>
      <div className="bg-white mb-5 w-[384px] flex flex-col justify-center items-center h-[496px] shadow-none rounded-none md:shadow-2xl md:rounded-xl place-self-center">
        <div className="relative grid place-items-center">
          <img src={image.primary} alt="image" className="w-36 h-auto" />
          <div className="absolute w-56 h-56 rounded-full bg-blue-50 place-self-center top-0 z-[-1]" />
          <div className="mt-10">
            <p className="font-primary font-bold text-[34px] text-gray-900 px-8">
              {title}
            </p>
            <p className="font-primary font-light tracking-wider text-sm text-gray-800 px-8">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex flex-col space-y-5 h-full items-center justify-center transform translate-y-10 hidden">
        <div className="w-24 h-24 bg-white shadow-2xl rounded-xl flex justify-center items-center">
          {image.secondary && (
            <img
              src={image.secondary}
              alt=""
              className="w-36 h-auto px-2 py-2"
            />
          )}
        </div>
        <div className="w-32 h-32 bg-yellow-400 rounded-xl shadow-2xl flex justify-center items-center">
          {image.third && (
            <img src={image.third} alt="" className="w-36 h-auto px-2 py-2" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
