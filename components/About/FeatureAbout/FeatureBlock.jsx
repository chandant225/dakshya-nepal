import React from "react";

const FeatureBlock = ({ title, description, icon }) => {
  return (
    <div className="p-0.5">
      <div
        className="relative flex items-center shadow-lg justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-500"
        style={{
          backgroundImage:
            "linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%)",
        }}
      >
        <img src={icon} alt="icon" className="h-10  w-10 cover" />
        <div
          className="absolute w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full -top-4 -right-4"
          style={{
            backgroundImage:
              "linear-gradient(253.58deg, #FFC000 1.55%, #FF8A00 95.8%)",
          }}
        />
      </div>
      <p className="my-4 font-primary text-2xl text-gray-800 capitalize font-semibold">
        {title}
      </p>
      <p className="text-gray-600 font-primary text-base font-normal">
        {description}
      </p>
    </div>
  );
};

export default FeatureBlock;
